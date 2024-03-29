import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  
  constructor (
    private feedbacksRepository: FeedbacksRepository,
    private maiAdpater: MailAdapter,
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot} = request;
    
    if(!type) {
      throw new Error('Type is required.')
    }

    if(!comment) {
      throw new Error('Comment is required.')
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.')
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })

    await this.maiAdpater.sendMail({
      subject: 'Novo Feedback.',
      body: [
        '<div style="font-family: sans-serif; fon-size: 16px; color: #111">',
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src=${screenshot} width="80" />` : '',
        '</div>'
      ].join('\n')
    })
  }
}
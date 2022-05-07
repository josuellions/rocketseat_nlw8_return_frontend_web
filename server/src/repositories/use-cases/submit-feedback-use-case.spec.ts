import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

// test('sum 2 + 2', () => {
//   expect(2 + 2).toBe(4)
// })

//SPIES = espião (para testar se a função foi realmente chamada)
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();


const submitFeedback = new SubmitFeedbackUseCase(
  /* Sem uso do SPIES
  { create: async () => {} },
  { sendMail: async () => {} }
  */

  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

/**TESTE de envio de feedback */
describe('Subimit feedback', () => {
  it('should be able to submit a feedback', async () => {

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'exemple comment',
      screenshot: 'data:image/png;base64,asdfa80654sdf'
    })).resolves.not.toThrow();

    /** Com uso do SPIES */
    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit feedback without type', async () => {

    await expect(submitFeedback.execute({
      type: '',
      comment: 'exemple comment',
      screenshot: 'data:image/png;base64,asdfa80654sdf'
    })).rejects.toThrow();
  });

  it('should not be able to submit feedback without type', async () => {

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,asdfa80654sdf'
    })).rejects.toThrow();
  });

  it('should not be able to submit feedback  with an invalid screenshot', async () => {

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'exemple comment',
      screenshot: 'image.png'
    })).rejects.toThrow();
  });
}) ;

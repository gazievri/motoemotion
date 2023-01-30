import './ContactUs.sass';
import { useForm } from 'react-hook-form';
import { forwardRef, useState } from 'react';
import {
  nameRegExp,
  emailRegExp,
  phoneRegExp,
  descriptionRegExp,
} from '../../utils/regExp.js';
import { Button } from '../Button/Button';
import { ACCESS_KEY_WEB3FROMS } from '../../utils/constants';

// interface IContactUsProps {
//   handleLogin: (data: IUser) => void,
// }

const ContactUs = ({ setIsModalResponseOpened, setDataForResponse, contactRef }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setFocus,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });

  const watchComment = watch('comment', 0);

  // Обработка Submit (отправка данных формы на почту)
  const onSubmit = async (data, e) => {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
          setDataForResponse('Спасибо за сообщение! Мы вам перезвоним');
          setIsModalResponseOpened(true);
        } else {
          setIsSuccess(false);
          setMessage(json.message);
          setDataForResponse('Что-то сломалось! Попробуйте еще раз');
          setIsModalResponseOpened(true);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage('Client Error. Please check the console.log for more info');
        console.log(error);
      });
  };

  const changeInputFocus = e => {
    const inputNames = ['name','phone','email','comment','checked'];
    const index = e.target.dataset.index;
    if (e.key === 'Enter' && index < 4) setFocus(inputNames[+index + 1]);
  }

  return (
    <section className="contact-us" id="contacts" ref={contactRef}>
      <h2 className="contact-us__title">Связаться с нами</h2>
      <form className="contact-us__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-us__inputs">
          <input
            type="hidden"
            value={ACCESS_KEY_WEB3FROMS}
            {...register('access_key')}
          />
          <label className="contact-us__lable">
            Ваше имя:
            <input
              className="contact-us__input"
              placeholder="Ваше имя"
              type="text"
              name="name"
              data-index='0'
              onKeyDown={changeInputFocus}
              {...register('name', {
                required: 'Обязательное поле',
                maxLength: {
                  value: 30,
                  message: 'Не более 30 символов',
                },
                pattern: {
                  value: nameRegExp,
                  message: 'Допустимы только русские или английские буквы',
                },
              })}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && (
              <p role="alert" className="contact-us__error-message">
                {errors.name?.message}
              </p>
            )}
          </label>
          <label className="contact-us__lable">
            Телефон:
            <input
              className="contact-us__input"
              placeholder="Введите телефон"
              type="tel"
              name="phone"
              data-index='1'
              onKeyDown={changeInputFocus}
              {...register('phone', {
                required: 'Обязательное поле',
                maxLength: {
                  value: 12,
                  message: 'Не более 12 символов',
                },
                pattern: {
                  value: phoneRegExp,
                  message: 'Введите корректный номер телефона',
                },
              })}
              aria-invalid={errors.phone ? 'true' : 'false'}
            />
            {errors.phone && (
              <p role="alert" className="contact-us__error-message">
                {errors.phone?.message}
              </p>
            )}
          </label>

          <label className="contact-us__lable">
            Электронная почта:
            <input
              className="contact-us__input"
              placeholder="Введите email"
              type="email"
              name="email"
              data-index='2'
              onKeyDown={changeInputFocus}
              {...register('email', {
                required: 'Обязательное поле',
                maxLength: {
                  value: 50,
                  message: 'Не более 50 символов',
                },
                pattern: {
                  value: emailRegExp,
                  message: 'Введите корректный адрес электронной почты',
                },
              })}
            />
            {errors.email && (
              <p role="alert" className="contact-us__error-message">
                {errors.email?.message}
              </p>
            )}
          </label>

          <label className="contact-us__lable">
            Комментарий:
            <textarea
              className="contact-us__input"
              placeholder="Оставьте свой комментарий..."
              type="textarea"
              name="comment"
              data-index='3'
              onKeyDown={changeInputFocus}
              {...register('comment', {
                required: 'Обязательное поле',
                maxLength: {
                  value: 300,
                  message: 'Не более 300 символов',
                },
                minLength: {
                  value: 10,
                  message: 'Не менее 10 символов',
                },
                pattern: {
                  value: descriptionRegExp,
                  message: 'Допустимы только русские или английские буквы',
                },
              })}
            />
            {errors.comment && (
              <p role="alert" className="contact-us__error-message">
                {errors.comment?.message}
              </p>
            )}
            <p className="contact-us__symbols-counter">
              <span
                className={
                  watchComment.length >= 10 && watchComment.length <= 300
                    ? 'contact-us__count'
                    : 'contact-us__count_type_wrong'
                }
              >
                {!watchComment.length ? 0 : watchComment.length}
              </span>
              /300
            </p>
          </label>
        </div>
        <div className="contact-us__agreement">
          <input
            className="contact-us__agreement-checkbox"
            type="checkbox"
            name="form-checkbox"
            id="form-checkbox"
            required
            data-index='4'
            onKeyDown={changeInputFocus}
            {...register('checked', {
              required: true,
            })}
          />
          <label
            htmlFor="form-checkbox"
            className="contact-us__agreement-lable"
          >
            Нажимая кнопку, я принимаю условия{' '}
            <a className="contact-us__agreement-link" href="/agreement">
              Пользовательского соглашения
            </a>{' '}
            и даю своё согласие на обработку моих персональных данных, в
            соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О
            персональных данных».
          </label>
        </div>
        <div className="contact-us__btn">
          <Button
            lable="Отправить"
            width="100%"
            type="submit"
            disabled={!isValid}
          />
        </div>
      </form>
    </section>
  );
};

export default forwardRef(ContactUs)

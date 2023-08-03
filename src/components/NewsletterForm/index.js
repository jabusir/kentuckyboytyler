import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function NewsletterForm({ className, ...props }) {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [state, setState] = useState(states.IDLE);
  const [errorMessage, setErrorMessage] = useState(null);

  const router = useRouter();
  const isComingSoonPage = router.pathname === '/';

  const onSubmitHandler = async event => {
    event.preventDefault();
    if (email.trim() === '') return;
    await subscribe();
  };

  const isEmailValid = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const onChangeHandler = event => {
    setEmail(event.target.value);
    setIsValid(isEmailValid(event.target.value));
  };

  const subscribe = async () => {
    setState(states.LOADING);
    setErrorMessage(null);
    try {
      await axios.post('/api/newsletter', { email });
      setState(states.SUCCESS);
      setTimeout(() => {
        setState(states.IDLE);
      }, 1000);
    } catch (e) {
      console.error(e);
      setErrorMessage(e.response.data.error.split('. ')[0]);
      setState(states.ERROR);
    }
  };

  return (
    <form
      className={`mb-0 sm:mb-4 ${className ?? ''}`}
      onSubmit={onSubmitHandler}
      {...props}
    >
      <div className="flex flex-col">
        <label
          className={`z-50 tracking-wider text-medium-gray sm:tracking-[0.08em] sm:text-gray`}
        >
          Join our mailing list
        </label>
        <div className="relative mx-auto mt-3 max-w-[160px] sm:mx-0">
          <input
            className={`peer mt-5 h-6 w-full border-b bg-transparent text-[12px]
             leading-4 tracking-wider text-gray outline-none
             ${state === states.ERROR ? 'border-red-600' : ''}
             ${state === states.SUCCESS ? 'border-green-600' : ''}`}
            type="text"
            placeholder="EMAIL"
            name="email"
            value={email}
            onChange={onChangeHandler}
          />
          <label
            className={`pointer-events-none absolute left-0 bottom-0 -mb-1 h-6 w-full bg-transparent
             p-0 text-left text-[12px] leading-4 tracking-wider text-gray transition-all peer-focus:-translate-y-full
             ${state === states.ERROR ? 'border-red-600' : ''}
             ${state === states.SUCCESS ? 'border-green-600' : ''}
             ${email.trim() !== '' ? '-translate-y-full' : ''}`}
            htmlFor="email"
          >
            EMAIL
          </label>
          {isValid && (
            <button className="absolute right-0 bottom-0 -translate-y-1/2">
              {state === states.LOADING ? <CircularProgress /> : <RightArrow />}
            </button>
          )}
        </div>
      </div>
      {state === states.ERROR && (
        <p className="z-10 mt-2 w-full text-red-600">{errorMessage}</p>
      )}
      {state === states.SUCCESS && (
        <p className="z-10 mt-2 w-full text-green-600">
          Thank you for subscribing!
        </p>
      )}
    </form>
  );
}

const RightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2 -mt-1 h-4 w-4 rotate-180"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.707 3.293a1 1 0 010 1.414L6.414 9H17a1 1 0 110 2H6.414l4.293 4.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
      fill="#000"
    />
  </svg>
);

const CircularProgress = () => (
  <svg
    className="text-gray-500 -ml-1 mr-3 h-5 w-5 animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
);

const states = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};
export default NewsletterForm;

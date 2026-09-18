import React from "react";

type IconProps = {
  className?: string;
  size?: number;
};

export const IconX: React.FC<IconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.924L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

export const IconTelegram: React.FC<IconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

export const IconReddit: React.FC<IconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden
  >
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.398 1.334-1.003 1.602.03.198.047.4.047.613 0 1.995-2.46 3.612-5.5 3.612S6.5 16.46 6.5 14.465c0-.213.016-.415.047-.612-.605-.268-1.003-.886-1.003-1.602 0-.968.786-1.754 1.754-1.754.463 0 .878.175 1.19.46 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12.004c-.616 0-1.12.508-1.12 1.127 0 .619.504 1.127 1.12 1.127.617 0 1.12-.508 1.12-1.127 0-.619-.503-1.127-1.12-1.127zm5.5 0c-.616 0-1.12.508-1.12 1.127 0 .619.504 1.127 1.12 1.127.617 0 1.12-.508 1.12-1.127 0-.619-.503-1.127-1.12-1.127zm-5.583 3.267c-.012.042-.053.185.15.29.68.36 1.527.54 2.683.54s2.003-.18 2.683-.54c.203-.105.162-.248.15-.29-.013-.042-.155-.097-.332.02-.88.55-2.218.715-2.501.715-.283 0-1.621-.165-2.501-.715-.177-.117-.32-.062-.332-.02z" />
  </svg>
);

export const IconEnvelope: React.FC<IconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden
  >
    <path d="M1.5 8.67v8.58A2.25 2.25 0 0 0 3.75 19.5h16.5a2.25 2.25 0 0 0 2.25-2.25V8.67l-8.928 5.493a3.75 3.75 0 0 1-4.144 0L1.5 8.67Z" />
    <path d="M22.5 6.908V6.75a2.25 2.25 0 0 0-2.25-2.25H3.75A2.25 2.25 0 0 0 1.5 6.75v.158l9.714 5.978a2.25 2.25 0 0 0 2.572 0L22.5 6.908Z" />
  </svg>
);

export const IconExclamationCircle: React.FC<IconProps> = ({ className }) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
    aria-hidden
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
  </svg>
);

export const IconChevronUp: React.FC<IconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

export const IconChevronDown: React.FC<IconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

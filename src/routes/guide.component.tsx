import { Link } from '@tanstack/react-router';

const Guide = () => {
  return (
    <main className='flex justify-center'>
      <div className='p-2 h-full max-w-screen-md'>
        <h1 className='text-bold text-4xl my-2'>Welcome to Dual Fill</h1>
        <h2 className='text-bold text-2xl my-1'>What is this tool?</h2>
        <p className='text-lg'>
          Dual fill is a companion to{' '}
          <a
            href='https://mpcfill.com/guide'
            target='_blank'
            rel='noopener noreferrer'
            className='underline text-bold'
          >
            MPC Fill
          </a>{' '}
          for users who like to make double-sided cards. These types of cards
          allow you to print and test more cards and use less storage real
          estate. The current process for creating these cards involves a fair
          amount of manual work that this tool aims to cut out
        </p>
        <h2 className='text-bold text-2xl my-1'>How to use Dual Fill</h2>
        <p className='text-lg'>
          Dual Fill aims to be very simple for the user but there is still work
          on your end to be mindful of
        </p>
        <ol className='list-decimal'>
          <li className='text-lg'>
            <p>Copy your deck lists.</p>
            <p>
              If copying from{' '}
              <a
                href='https://www.moxfield.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='underline text-bold'
              >
                Moxfield
              </a>{' '}
              make sure to use the "Copy for MTGO" option.{' '}
            </p>
            <p>
              If copying from{' '}
              <a
                href='https://archidekt.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='underline text-bold'
              >
                Archidekt
              </a>{' '}
              make sure to choose File Type: "Text" and Format Option: "1 Card
              Name"
            </p>
            <strong>
              I highly recommend using Moxfield as that is the application this
              site was tested against. Some features are missing when using
              other deck building applications.
            </strong>
          </li>
          <li className='text-lg'>
            Paste those lists into the{' '}
            <Link to='/' className='underline text-bold'>
              Tool
            </Link>
          </li>
          <li className='text-lg'>Click the "Generate CSV" button</li>
          <li className='text-lg'>Save the CSV file to your machine</li>
          <li className='text-lg'>
            On MPC Fill, use the "Upload List" dropdown, select "CSV File" and
            choose the one you generated here
          </li>
        </ol>
        <h2 className='text-bold text-2xl my-1'>FAQs</h2>
        <h3 className='text-bold text-xl my-1'>
          How do I add <i>actual</i> dual-faced cards?
        </h3>
        <p className='text-lg'>
          If you are using a card that is dual-faced, you have two options
        </p>
        <ol className='list-decimal'>
          <li className='text-lg'>Use that card in both decks</li>
          <li className='text-lg'>
            Find a printing on MPCFill that has both modes on one side of the
            card. Not all cards have this type of art so you will have to get
            lucky
          </li>
        </ol>
      </div>
    </main>
  );
};

export const component = Guide;

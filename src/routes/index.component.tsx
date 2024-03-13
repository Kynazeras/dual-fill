// components - shadcn
import { Button } from '@/components/ui/button';
// utils
import { finalOutput } from '../utils';
// custom inputs
import { DeckListInput } from '../_components/DeckListInput';
// icons
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
// form
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';

const formSchema = z.object({
  frontDeck: z.string(),
  backDeck: z.string(),
});

type FormInputs = z.infer<typeof formSchema>;

const Index = () => {
  const form = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      frontDeck: '',
      backDeck: '',
    },
  });

  const onSubmit = ({ frontDeck, backDeck }: FormInputs) => {
    window.open(encodeURI(finalOutput(frontDeck, backDeck)));
  };

  return (
    <main className='text-center h-full'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-8 p-4'>
            <DeckListInput label='Front Deck' fieldName='frontDeck' />
            <DeckListInput label='Back Deck' fieldName='backDeck' />
          </div>
          <Button onClick={form.handleSubmit(onSubmit)}>
            <>
              Generate CSV
              <ArrowDownTrayIcon className='h-5 w-5 ml-2'></ArrowDownTrayIcon>
            </>
          </Button>
        </form>
      </Form>
    </main>
  );
};

export const component = Index;

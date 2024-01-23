import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Link } from '@tanstack/react-router';
import { useFormContext } from 'react-hook-form';

export const DeckListInput = ({
  label,
  fieldName,
}: {
  fieldName: string;
  label: string;
}) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='font-bold text-2xl'>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder='Paste your deck list here'
              className='resize-none'
              cols={40}
              rows={40}
              {...field}
            />
          </FormControl>
          <FormDescription>
            Make sure to check out the{' '}
            <Link to='/guide' className='underline'>
              guide
            </Link>{' '}
            for proper formatting guidelines
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

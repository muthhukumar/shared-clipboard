import { FormControl, FormLabel, Input, FormErrorMessage, HStack, Button } from '@chakra-ui/react'
import { Form, useNavigate, useTransition } from 'remix'
import { FormPropsType } from '~/types/common'
import { VoteType } from '~/types/vote'

export interface VoteFormProps extends FormPropsType<VoteType> {
  submittingText: string
  okButtonText: string
}

export default function HabitForm(props: VoteFormProps) {
  const navigation = useNavigate()
  const onClose = () => navigation('/clipboard')

  const transition = useTransition()

  const submitting = transition.state === 'submitting'
  return (
    <Form method="post">
      <FormControl isInvalid={props?.title?.invalid}>
        <FormLabel>Title</FormLabel>
        <Input
          placeholder="Title"
          type="text"
          name="title"
          defaultValue={props?.title?.value}
          isInvalid={props?.title?.invalid}
        />
        <FormErrorMessage>{props?.title?.errorMessage}</FormErrorMessage>
      </FormControl>
      {/* <FormControl isInvalid={actionData?.errors.label.isInvalid} mt="2">
          <FormLabel>Label</FormLabel>
          <Input
            // isRequired
            placeholder="Label"
            type="text"
            name="label"
            defaultValue={vote.label ?? ''}
            isInvalid={actionData?.errors.label.isInvalid}
          />
          <FormErrorMessage>{actionData?.errors.title.message}</FormErrorMessage>
        </FormControl> */}

      <HStack justifyContent={'flex-end'} mt="8">
        <Button onClick={onClose}>Cancel</Button>
        <Button
          colorScheme="blue"
          isLoading={submitting}
          loadingText={props.submittingText ?? 'Submitting'}
          type="submit"
        >
          {props.okButtonText ?? 'Create'}
        </Button>
      </HStack>
    </Form>
  )
}

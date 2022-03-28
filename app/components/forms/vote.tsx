import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  HStack,
  Button,
  Select,
} from '@chakra-ui/react'
import { ShareOption } from '@prisma/client'
import { Form, useNavigate, useTransition } from 'remix'
import { FormPropsType } from '~/types/common'
import { VoteType } from '~/types/vote'

export interface VoteFormProps extends FormPropsType<VoteType> {
  submittingText: string
  okButtonText: string
}

export default function HabitForm(props: VoteFormProps) {
  const navigation = useNavigate()
  const onClose = () => navigation('/habits-rank')

  const transition = useTransition()

  const submitting = transition.state === 'submitting'

  console.log('here', props?.shareWith?.invalid)

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
      <FormControl isInvalid={props?.shareWith?.invalid} mt="4">
        <FormLabel>Share with</FormLabel>
        <Select
          defaultValue={props.shareWith?.value ?? ShareOption.PRIVATE}
          name="shareWith"
          placeholder="Select option"
          isInvalid={props?.shareWith?.invalid}
        >
          <option value={ShareOption.PRIVATE}>Private</option>
          <option value={ShareOption.FRIENDS}>Friends</option>
          <option value={ShareOption.PUBLIC}>Public</option>
        </Select>
        <FormErrorMessage>{props?.shareWith?.errorMessage}</FormErrorMessage>
      </FormControl>
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

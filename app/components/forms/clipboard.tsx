import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Select,
  HStack,
  Button,
} from '@chakra-ui/react'
import { Form, useNavigate, useTransition } from 'remix'
import { ClipboardContentType } from '~/types/clipboard'
import { FormPropsType } from '~/types/common'
import { composeToBoolean } from '~/utils/form'

export interface ClipboardFormProps extends FormPropsType<ClipboardContentType> {
  submittingText: string
  okButtonText: string
}

export default function ClipboardForm(props: ClipboardFormProps) {
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
          isInvalid={props?.title?.invalid}
          defaultValue={props?.title?.value ?? ''}
        />
        <FormErrorMessage>{props?.title?.errorMessage}</FormErrorMessage>
      </FormControl>

      <FormControl mt={4} isInvalid={props?.content?.invalid}>
        <FormLabel>Content</FormLabel>
        <Textarea
          name="content"
          placeholder="Content to copy"
          isInvalid={props?.content?.invalid}
          defaultValue={props?.content?.value ?? ''}
        />
        <FormErrorMessage>{props?.content?.errorMessage}</FormErrorMessage>
      </FormControl>
      <FormControl mt={4} isInvalid={props?.private?.invalid}>
        <FormLabel>Is Private</FormLabel>
        <Select
          name="private"
          placeholder="Select option"
          defaultValue={String(composeToBoolean(String(props?.private?.value), true))}
          isInvalid={props?.private?.invalid}
        >
          <option value="false">Public</option>
          <option value="true">Private</option>
        </Select>
        <FormErrorMessage>{props?.private?.errorMessage}</FormErrorMessage>
      </FormControl>
      <HStack justifyContent={'flex-end'} mt="8">
        <Button onClick={onClose}>Cancel</Button>
        <Button
          colorScheme="blue"
          isLoading={submitting}
          loadingText={props?.submittingText ?? 'Submitting'}
          type="submit"
        >
          {props.okButtonText ?? 'Create'}
        </Button>
      </HStack>
    </Form>
  )
}

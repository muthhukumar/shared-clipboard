import { FormControl, FormLabel, Input, FormErrorMessage, HStack, Button } from '@chakra-ui/react'
import { Form, useNavigate, useTransition } from 'remix'
import { FormPropsType } from '~/types/common'
import { ShortURLType } from '~/types/shorturl'

export interface ShortURLPropsType extends FormPropsType<ShortURLType> {
  submittingText: string
  okButtonText: string
}

export default function ShortURL(props: ShortURLPropsType) {
  const navigation = useNavigate()
  const onClose = () => navigation('/shorturl')

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

      <FormControl mt={4} isInvalid={props?.url?.invalid}>
        <FormLabel>URL</FormLabel>
        <Input
          type="url"
          name="url"
          placeholder="URL"
          isInvalid={props?.url?.invalid}
          defaultValue={props?.url?.value ?? ''}
        />
        <FormErrorMessage>{props?.url?.errorMessage}</FormErrorMessage>
      </FormControl>
      <FormControl mt={4} isInvalid={props?.slug?.invalid}>
        <FormLabel>Slug</FormLabel>
        <Input
          type="text"
          name="slug"
          placeholder="URL Slug"
          isInvalid={props?.slug?.invalid}
          defaultValue={props?.slug?.value ?? ''}
        />
        <FormErrorMessage>{props?.slug?.errorMessage}</FormErrorMessage>
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

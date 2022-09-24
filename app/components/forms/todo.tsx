import { TodoType } from '~/types/todo'
import { FormPropsType } from '~/types/common'
import { Priority } from '@prisma/client'

import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Select,
  Button,
  HStack,
} from '@chakra-ui/react'
import { Form, useNavigate, useTransition } from 'remix'
import { composeToBoolean } from '~/utils/form'
import moment from 'moment'

export interface TodoFormProps extends FormPropsType<TodoType> {
  submittingText: string
  okButtonText: string
}

export default function TodoForm(props: TodoFormProps) {
  const navigation = useNavigate()
  const onClose = () => navigation('/todo')

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
          autoFocus
          isInvalid={props?.title?.invalid}
          defaultValue={props?.title?.value ?? ''}
        />
        <FormErrorMessage>{props?.title?.errorMessage}</FormErrorMessage>
      </FormControl>

      <FormControl mt={4} isInvalid={props?.description?.invalid}>
        <FormLabel>Description</FormLabel>
        <Textarea
          isRequired={false}
          name="description"
          placeholder="Description..."
          isInvalid={props?.description?.invalid}
          defaultValue={props?.description?.value ?? ''}
        />
        <FormErrorMessage>{props?.description?.errorMessage}</FormErrorMessage>
      </FormControl>

      {/* <FormControl mt={4} isInvalid={props?.labels?.invalid}>
          <FormLabel htmlFor="labels">Labels</FormLabel>

          <Select
            isMulti
            name="labels"
            options={labels.map((label) => {
              return {
                label: label.label,
                value: label.id,
              }
            })}
          />
        </FormControl> */}

      <FormControl mt={4} isInvalid={props?.completed?.invalid}>
        <FormLabel>Completed</FormLabel>
        <Select
          name="completed"
          placeholder="Select option"
          defaultValue={String(composeToBoolean(String(props?.completed?.value), false))}
          isInvalid={props?.completed?.invalid}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </Select>
        <FormErrorMessage>{props?.completed?.errorMessage}</FormErrorMessage>
      </FormControl>

      <FormControl mt={4} isInvalid={props?.priority?.invalid}>
        <FormLabel>Priority</FormLabel>
        <Select
          name="priority"
          placeholder="Select priority"
          defaultValue={props?.priority?.value ?? Priority.NORMAL}
          isInvalid={props?.priority?.invalid}
        >
          <option value={Priority.LOW}>Low</option>
          <option value={Priority.NORMAL}>Normal</option>
          <option value={Priority.MEDIUM}>Medium</option>
          <option value={Priority.HIGH}>High</option>
        </Select>
        <FormErrorMessage>{props?.priority?.errorMessage}</FormErrorMessage>
      </FormControl>

      <FormControl mt={4} isInvalid={props?.dueDate?.invalid}>
        <FormLabel htmlFor="isChecked">Due date</FormLabel>

        <Input
          name="dueDate"
          isRequired={false}
          type="date"
          isInvalid={props?.dueDate?.invalid}
          defaultValue={
            props?.dueDate?.value ? moment(props?.dueDate?.value).format('YYYY-MM-DD') : ''
          }
        />
        <FormErrorMessage>{props?.dueDate?.errorMessage}</FormErrorMessage>
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

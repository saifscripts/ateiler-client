import {
  Button,
  Modal,
  ModalAction,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  toast,
} from 'keep-react';
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { displayToast } from '../../lib/toast';
import { useDeleteProductMutation } from '../../redux/features/products/productApi';

interface IDeleteModalProps {
  id: string;
  name: string;
}

const DeleteModal = ({ id, name }: IDeleteModalProps) => {
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    const result = await deleteProduct(id);

    if (result?.data?.success) {
      setOpen(false);
      displayToast(result, 'Successfully deleted the product!', {
        action: {
          label: 'close',
          onClick: () => toast.dismiss(),
        },
      });
    }
  };

  return (
    <Modal isOpen={open} onOpenChange={() => setOpen(false)}>
      <ModalAction onClick={() => setOpen(true)} asChild>
        <button className="hover:bg-primary-50 p-1 rounded-md">
          <MdDelete className="text-error-500 text-2xl" />
        </button>
      </ModalAction>
      <ModalBody>
        <ModalContent>
          <ModalHeader className="mb-6 space-y-3">
            <div className="space-y-1">
              <ModalTitle>Delete {name} ?</ModalTitle>
              <ModalDescription>This action cannot be undone.</ModalDescription>
            </div>
          </ModalHeader>
          <ModalFooter className="justify-end">
            <ModalClose asChild>
              <Button
                id="closeBtn"
                size="xs"
                variant="outline"
                color="secondary"
              >
                Cancel
              </Button>
            </ModalClose>
            <ModalClose onClick={handleDelete} asChild>
              <Button disabled={isLoading} size="xs" color="error">
                Delete
              </Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default DeleteModal;

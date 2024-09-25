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
import { MdDelete } from 'react-icons/md';
import { useDeleteProductMutation } from '../../redux/features/products/productApi';

interface IDeleteModalProps {
  id: string;
  name: string;
}

const DeleteModal = ({ id, name }: IDeleteModalProps) => {
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async () => {
    try {
      console.log('clicked');
      const result = await deleteProduct(id);

      if (result?.data?.success) {
        document.getElementById('closeBtn')?.click();
        toast.success('Successfully deleted the product!', {
          action: {
            label: 'close',
            onClick: () => toast.dismiss(),
          },
        });
      }
    } catch (err) {
      toast.error((err as Error).message);
    }
  };

  return (
    <Modal>
      <ModalAction asChild>
        <button className="hover:bg-primary-50 p-1 rounded-md">
          <MdDelete className="text-error-500 text-2xl" />
        </button>
      </ModalAction>
      <ModalBody>
        <ModalContent>
          <ModalClose id="closeBtn" className="absolute right-4 top-4" />
          <ModalHeader className="mb-6 space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-metal-50 dark:bg-metal-800">
              <MdDelete className="text-error-500 cursor-pointer text-2xl" />
            </div>
            <div className="space-y-1">
              <ModalTitle>Do you want to delete {name} ?</ModalTitle>
              <ModalDescription>
                If you delete the product once, you will loss the data forever.
                This action cannot be undone.
              </ModalDescription>
            </div>
          </ModalHeader>
          <ModalFooter>
            <ModalClose asChild>
              <Button
                id="closeBtn"
                size="sm"
                variant="outline"
                color="secondary"
              >
                Cancel
              </Button>
            </ModalClose>
            <ModalClose onClick={handleDelete} asChild>
              <Button size="sm" color="error">
                Confirm
              </Button>
            </ModalClose>
          </ModalFooter>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default DeleteModal;

import Modal from "@/components/modules/modal/Modal";
import HomePage from "@/components/templates/HomePage";
import ModalForm from "@/components/modules/modal_form/ModalForm";
export default function Home() {
  return (<>
   <HomePage/>
   <Modal>
    <ModalForm/>
   </Modal>
   </>
  );
}

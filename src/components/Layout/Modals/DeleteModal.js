import React from "react";

const DeleteModal = ({yesDelete,noDelete, closeModal,isDeleting}) => {
    // const [userAnswer, setAnswer ] = useState(answer);
    // const yesDelete = 
    return (
        <div className="my-modal">
            <div className="delete-modal">
                <div class="modal-header">
                    <span class="close" onClick={()=>{closeModal()}}>&times;</span>
                    <h4 className="modal-warning">Delete Product?</h4>
                </div>
                <p>Are you sure you want to delete this product?</p>
                <div className="modal-confirmation">
                    {
                        isDeleting ?
                        <p style={{float:"left"}}>
                            <button className="btn btn-block" onClick={()=>{yesDelete()}}><i className="fa fa-spin fa-spinner"></i></button>
                        </p>
                        :
                        <p style={{float:"left"}}>
                            <button className="btn" onClick={()=>{yesDelete()}}>YES</button>
                        </p>
                    }
                    
                    <p style={{float:"right"}}>
                        <button className="btn red" onClick={()=>{noDelete()}}>NO</button>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default DeleteModal;
import Dialog from './Dialog/Dialog'
import dialogsListStyles from './DialogsList.module.css';


const DialogsList = (props) => {
    let dialogs = props.dialogs.map(dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name}
        lastMessage={dialog.lastMessage} avatarLink={dialog.avatarLink} />)

    return (
        <div className={dialogsListStyles.container}>
            {dialogs}
        </div>
    )
}

export default DialogsList
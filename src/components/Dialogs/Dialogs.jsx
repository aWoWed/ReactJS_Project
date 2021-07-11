import classes from './Dialogs.module.css';

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                Dialogs
                <div className={classes.dialogItems}>
                    Ilya
                </div>
                <div className={classes.dialogItems}>
                    Dima
                </div>
                <div className={classes.dialogItems}>
                    Misha
                </div>
                <div className={classes.dialogItems}>
                    Max
                </div>
                <div className={classes.dialogItems}>
                    Lesya
                </div>
                <div className={classes.dialogItems}>
                    Anya
                </div>
            </div>
            <div className={classes.messages}>
                <div className='message'>Hi</div>
                <div className='message'>Hello</div>
                <div className='message'>Man</div>
            </div>
        </div>
    );
}

export default Dialogs;
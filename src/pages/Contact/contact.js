import * as React from 'react';
import Planet1 from '../../assets/04_Collaboration Page/addon/Planet.png'
import Planet2 from '../../assets/04_Collaboration Page/addon/Planet-1.png'
import Planet3 from '../../assets/04_Collaboration Page/addon/Planet-2.png'
//import contact from '../../assets/images/contact/Comet_01.png'
//import zIndex from '@mui/material/styles/zIndex';
import { animations, easings } from 'react-animation'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Collaboratopn() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [organization, setOrganization] = React.useState();
  const [type, setType] = React.useState();
  const [email, setEmail] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleClickOpen = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const sendMessage = () => {
    const data = {
      Name: name,
      Organization: organization,
      Type: type,
      Email: email,
      Contact: contact,
      Message: message
    }

    console.log(data);

    axios.post('https://air-community-back.onrender.com/api/contact/send-email', data)
      .then(res => {
        console.log(res);
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <div className='contact'>
      <img src={Planet1} className='contact_planet_1' />
      <img src={Planet2} className='contact_planet_2' />
      <img src={Planet3} className='contact_planet_3' />
      <div className='form_animation'>
          <div className='style-row name-contact'>
            <label style={styles.label_style}>{t('body_contact.contact1')}*</label>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder={t('body_contact.contact2')} className='input-style' required />
          </div>

          <div className='flex-style'>
            <div className='style-row'>
              <label style={styles.label_style}>{t('body_contact.contact3')}</label>
              <input type="text" onChange={(e) => setOrganization(e.target.value)} placeholder={t('body_contact.contact3')} className='input-style' required />
            </div>
            <div className="style-row">
              <label style={styles.label_style}>{t('body_contact.contact4')}</label>
              <select
                className="input-style"
                onChange={(e) => setType(e.target.value)}
                defaultValue="" // Sets the default selected option
              >
                <option value="" disabled>
                {t('body_contact.contact4')}
                </option>
                <option value="general">{t('body_contact.contact5')}</option>
                <option value="support">{t('body_contact.contact6')}</option>
                <option value="sales">{t('body_contact.contact7')}</option>
                <option value="user-deletion">{t('body_contact.contact8')}</option>
              </select>
            </div>
          </div>
          <div className='flex-style'>
            <div className='style-row'>
              <label style={styles.label_style}>{t('body_contact.contact9')}*</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder={t('body_contact.contact10')} className='input-style' required />
            </div>

            <div className='style-row'>
              <label style={styles.label_style}>{t('body_contact.contact11')}</label>
              <input type="text" onChange={(e) => setContact(e.target.value)} placeholder={t('body_contact.contact12')} className='input-style' />
            </div>
          </div>

          <div className='style-row message-contact'>
            <label style={styles.label_style}>{t('body_contact.contact13')}*</label>
            <textarea onChange={(e) => setMessage(e.target.value)} placeholder={t('body_contact.contact14')} className='textarea-style' required></textarea>
          </div>

          <button type="submit" style={styles.button} onClick={() => sendMessage()}>{t('body_contact.contact15')}</button>
      </div>
      <div className='image_part'>
        <div style={{ textAlign: 'left' }}>
          <h1 className='get-in-touch'>{t('body_contact.contact16')}</h1>
          <div className='help-you' >
            {t('body_contact.contact17')}
          </div>
        </div>
        <div className='contact_image' />
      </div>
      <BootstrapDialog
        onClose={handleClose}
        className='contact-dialog'
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

const styles = {
  label_style: {
    textAlign: "left"
  },
  form: {
    borderRadius: '8px',
    color: 'white',
  },
  button: {
    marginRight: 10,
    width: '98%',
    padding: '15px',
    fontSize: '18px',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  animations: {
    animation: `pop-in ${easings.easeOutExpo} 0.9s forwards`
  }
};

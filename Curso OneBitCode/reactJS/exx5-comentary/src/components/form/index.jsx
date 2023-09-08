import Input from '../input/input';
import Title from '../title/title.jsx';
import {addTweet } from '../../hooks/script.jsx'
import { useState } from 'react';
import './style.module.scss';

export default function () {
  const [comment,setComment] = useState('')
  const [email,setEmail] = useState('')  

  const handleSubmit = (ev) => {
    ev.preventDefault()
    addTweet(email, comment);
    setComment('')
    setEmail('')
  }

  return(
    <form 
    onSubmit={handleSubmit}
    >
      <Title>Seção de Comentários</Title>
      <div className="elements">
        <Input id={'email'} type={'email'} label={'Email:'} 
        value={email} func={e => setEmail(e.target.value)} 
        /> 
        <Input id={'comentary'} type={'textarea'} label={'Comentary:'} 
        value={comment} func={e => setComment(e.target.value)}
        />
        <Input id={'btn'} type={'submit'} label={'Add to List:'} className='btn '/>
      </div>
    </form>
  )
}
import { useState } from 'react'
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Dt Money"/>
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}
import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'
//cria Interface para declarar Tipagem que a Prop esta recebendo.
interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}
// Passa Parametro para a funcao Header, onde a tipagem 'e igual a interface criado a cima.
export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Dt Money"/>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
        
      </Content>
    </Container>
  )
}
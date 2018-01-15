import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widgets/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
  
  componentWillMount() {
    this.props.getSummary();
  }
  render() {
    const { credit, debt } = this.props.summary
    return (
      <div>
        <ContentHeader title='DashBoard' small='Versão 1.0' />
        <Content>
          <Row>
            <ValueBox cols='12 12 6' color='green' icon='bank' 
            value={`€ ${credit}`} text='Total de Credito' />
            <ValueBox cols='12 12 6' color='red' icon='credit-card' 
            value={`€ ${debt}`} text='Total de Débitos' />
            <ValueBox cols='12 12 6' color='blue' icon='money' 
            value={`€ ${credit - debt}`} text='Consolidado' />
          </Row>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
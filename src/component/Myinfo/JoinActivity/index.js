import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper } from './styled';
import {
    resetSearch,
    postLeaveActivity,
    fetchJoin,
} from "../../../actions";
import Banner from "../Banner";
import { ActList, Card, InputButton, RoundButton } from "../../Common";
class JoinActivity extends Component {
    constructor(props) {
      super(props)
      this.state = {
        user: JSON.parse(localStorage.getItem('myData'))
      }
      this.renderCardPairs = this.renderCardPairs.bind(this)
    }

    componentDidMount() {
      const data = localStorage.getItem('myData');
      if (data == null) {
        alert('請先登入')
        window.location.href = '../Login'
      }
      this.props.fetchJoin({'sort': 'start asc'})
    }
 
    onLeaveActivityClick(id) {
      this.props.leaveActivity({activity: id});
      setTimeout(() => this.props.fetchJoin({'sort': 'start asc'}), 100)
    }

    renderCardPairs(data) {
      return (<Card data={data} url={`./SignUpDetail/${data.id}`} >
        <div className='btn-group'>
          {/*<RoundButton />*/}
          <RoundButton onClick={() => this.onLeaveActivityClick(data.id)}> 請假/取消 </RoundButton>
        </div>
      </Card>)
    }   

    render() {
        const { data, levels } = this.props;
        
        return [
            <Banner key="0"/>,
            <Wrapper key="1">
              <div key="0" className="header">
                <h2 key="0"> 我的報隊 </h2>
                { /* <InputButton key="1"/> */ }
              </div>
              <ActList key="1">
                { data.activity && data.activity.map((data, i) => this.renderCardPairs(data)) }
              </ActList>
            </Wrapper>
        ];
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    data: state.activity,
    levels: state.newGorupReducer.levels
});

const mapDispatchToProps = {
  fetchJoin: fetchJoin,
  resetSearch: resetSearch,
  leaveActivity: postLeaveActivity
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinActivity);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper } from './styled';
import {
    updateSearch,
    resetSearch,
    fetchActivity
} from "../../../actions";
import Banner from "../Banner";
import { ActList, Card, InputButton, RoundButton } from "../../Common";

class HostActivity extends Component {
  constructor(props) {
    super(props)
      this.state = {
        user: JSON.parse(localStorage.getItem('myData'))
      }
    this.renderCardPairs = this.renderCardPairs.bind(this)
  }
  componentDidMount() {
    this.props.fetchActivity({'sort': 'start asc', user: this.state.user.id})
  }

  renderCardPairs(data) {
    return (<Card data={data} url={`/myInfo/activityDetail/${data.id}`}>
      <div className='btn-group'>
        {/*<RoundButton />*/}
      </div>
    </Card>)
  }

  render() {
    const { data, levels } = this.props;

    return [
      <Banner key="0"/>,
      <Wrapper key="1">
        <div key="0" className="header">
          <h2> 我的開團 </h2>
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
  resetSearch: resetSearch,
  fetchActivity: fetchActivity,
  onUpdateSearch: updateSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(HostActivity);

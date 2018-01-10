import React from 'react';
import { logout } from '../../../actions/session_actions';
import { withRouter, NavLink } from 'react-router-dom';
import { toggleModal, toggleDropdown } from '../../../actions/ui_actions';

import DmList from './dm_list/dm_list';
import ChannelList from './channel_list/channel_list';

import { connect } from 'react-redux';

class SubNavContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      head: <div className="head" onClick={this.props.toggleAddDmModal}></div>,
      content: <DmList />
    };
    this.toggleHeadDropdown = this.toggleHeadDropdown.bind(this);
    this.toggleFooterDropdown = this.toggleFooterDropdown.bind(this);
  }

  toggleHeadDropdown(e) {
    e.stopPropagation();
    if (this.props.dropdownMode === "server") {
      this.props.toggleClearDropdown();
    } else {
      this.props.toggleHeadDropdown();
    }
  }

  toggleFooterDropdown(e) {
    e.stopPropagation();
    if (this.props.dropdownMode === "footer") {
      this.props.toggleClearDropdown();
    } else {
      this.props.toggleFooterDropdown();
    }
  }

  componentWillMount(){
    let headClass = "head";
    let headIndicatorClass = "indicator";
    let headIndicatorImg = "./assets/arrow-down.svg";
    let serverOptionsClass = "server-options-popup";
    if (this.props.dropdownMode === "server") {
      headClass = "head open";
      headIndicatorClass = "indicator open";
      headIndicatorImg = "./assets/close.svg";
      serverOptionsClass = "server-options-popup open";
    } else if (this.props.dropdownMode === 'footer') {

    } else {

    }

    switch(this.props.mode) {
      case 'friends_list':
        this.setState({
          head:
            <div className="head" onClick={this.props.toggleAddDmModal}>
              <div style={{
                  backgroundColor: "#26272c",
                  borderRadius: "5px",
                  border: "1px solid #24252a",
                  color: "rgb(113, 114, 118)",
                  fontSize: "14px",
                  height: "32px",
                  width: "216px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  lineHeight: "32px"

                }}>Find or start a conversation</div>
            </div>,
          content: <DmList />
        });
        break;
      case 'DM':
        this.setState({
          head:
          <div className="head" onClick={this.props.toggleAddDmModal}>
            <div style={{
                backgroundColor: "#26272c",
                borderRadius: "5px",
                border: "1px solid #24252a",
                color: "rgb(113, 114, 118)",
                fontSize: "14px",
                height: "32px",
                width: "216px",
                textAlign: "center",
                verticalAlign: "middle",
                lineHeight: "32px"
              }}>Find or start a conversation
            </div>
          </div>,
          content: <DmList />
        });
        break;
      default:
        this.setState({
          head:
          <div className={headClass} onClick={this.toggleHeadDropdown}>
            <div className="name">{this.props.serverList[this.props.mode].name}</div>
            <img className={headIndicatorClass} src={headIndicatorImg} alt=""/>
          </div>,
          headPopup:
            <div className={serverOptionsClass}>
            <div className="server-option-invite">
              <div className="server-option-icon invite-people"></div>
              Invite People
            </div>
            <div className="server-option-seperator"></div>
            <div className="server-option-item">
              <div className="server-option-icon server-setting"></div>
              Server Setting
            </div>
            <div className="server-option-item">
              <div className="server-option-icon create-channels"></div>
              Create channels
            </div>
            <div className="server-option-item">
              <div className="server-option-icon create-category"></div>
              Create Category
            </div>
            <div className="server-option-seperator"></div>
            <div className="server-option-item">
              <div className="server-option-icon notification-settings"></div>
              Notification Settings
            </div>
            <div className="server-option-item">
              <div className="server-option-icon privacy-settings"></div>
              Privacy Settings
            </div>
            <div className="server-option-seperator"></div>
            <div className="server-option-item">
              <div className="server-option-icon change-nickname"></div>
              Change Nickname
            </div>
            <div className="server-option-item">
              <div className="server-option-icon hide-muted-channels"></div>
              Hide Muted channels
            </div>
          </div>,
          content: <ChannelList serverId={this.props.mode} />
        });
    }
  }

  componentWillReceiveProps(newProps){

    let headClass = "head";
    let headIndicatorClass = "indicator";
    let headIndicatorImg = "./assets/arrow-down.svg";
    let serverOptionsClass = "server-options-popup";
    if (newProps.dropdownMode === "server") {
      headClass = "head open";
      headIndicatorClass = "indicator open";
      headIndicatorImg = "./assets/close.svg";
      serverOptionsClass = "server-options-popup open";

    } else if (newProps.dropdownMode === 'footer') {

    } else {

    }

    switch(newProps.mode) {
      case 'friends_list':
        this.setState({
          head: <div className="head" onClick={this.props.toggleAddDmModal}>
            <div style={{
                backgroundColor: "#26272c",
                borderRadius: "5px",
                border: "1px solid #24252a",
                color: "rgb(113, 114, 118)",
                fontSize: "14px",
                height: "32px",
                width: "216px",
                textAlign: "center",
                verticalAlign: "middle",
                lineHeight: "32px"

              }}>Find or start a conversation</div>
          </div>,
          content: <DmList />
        });
        break;
      case 'DM':
        this.setState({
          head:
            <div className="head" onClick={this.props.toggleAddDmModal}>
              <div style={{
                  backgroundColor: "#26272c",
                  borderRadius: "5px",
                  border: "1px solid #24252a",
                  color: "rgb(113, 114, 118)",
                  fontSize: "14px",
                  height: "32px",
                  width: "216px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  lineHeight: "32px"

                }}>Find or start a conversation
              </div>
            </div>,
          content: <DmList />
        });
        break;
      default:
        this.setState({
          head:
          <div className={headClass} onClick={this.toggleHeadDropdown}>
            <div className="name">{newProps.serverList[newProps.mode].name}</div>
            <img className={headIndicatorClass} src={headIndicatorImg} alt=""/>
          </div>,
          headPopup:
            <div className={serverOptionsClass}>
            <div className="server-option-invite">
              <div className="server-option-icon invite-people"></div>
              Invite People
            </div>
            <div className="server-option-seperator"></div>
            <div className="server-option-item">
              <div className="server-option-icon server-setting"></div>
              Server Setting
            </div>
            <div className="server-option-item">
              <div className="server-option-icon create-channels"></div>
              Create channels
            </div>
            <div className="server-option-item">
              <div className="server-option-icon create-category"></div>
              Create Category
            </div>
            <div className="server-option-seperator"></div>
            <div className="server-option-item">
              <div className="server-option-icon notification-settings"></div>
              Notification Settings
            </div>
            <div className="server-option-item">
              <div className="server-option-icon privacy-settings"></div>
              Privacy Settings
            </div>
            <div className="server-option-seperator"></div>
            <div className="server-option-item">
              <div className="server-option-icon change-nickname"></div>
              Change Nickname
            </div>
            <div className="server-option-item">
              <div className="server-option-icon hide-muted-channels"></div>
              Hide Muted channels
            </div>
          </div>,
          content: <ChannelList serverId={newProps.mode} />
        });
    }
  }


  render() {
    return (
      <div className="sub-nav">
        {this.state.head}
        {this.state.headPopup}
        {this.state.content}
        <div className="footer" onClick={this.toggleFooterDropdown}>
        </div>
      </div>
    );
  }
}

// <div className="footer">
//   <button className='logoutButton' onClick={this.props.logout}>{this.props.currentUser.username}</button>
// </div>

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    dropdownMode: state.ui.toggleMode,
    serverList: state.entities.servers
  };
};

const mapDispatchToProps = (dispatch, ownState) => {
  return {
    logout: () => dispatch(logout()),
    toggleAddDmModal: () => dispatch(toggleModal(true, 'addDmForm')),
    toggleHeadDropdown: () => dispatch(toggleDropdown(true, 'server')),
    toggleFooterDropdown: () => dispatch(toggleDropdown(true, 'footer')),
    toggleClearDropdown: () => dispatch(toggleDropdown(false, undefined))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SubNavContainer)
);

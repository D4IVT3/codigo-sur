
import React from 'react';
import Client from './Client';

const MATCHING_ITEM_LIMIT = 10;
const UserSearch = React.createClass({
  getInitialState: function () {
    return {
      users: [],
      searchValue: '',
    };
  },



  handleSearchChange: function (e) {
    const value = e.target.value;

    this.setState({
      searchValue: value
    });

    if (value === '') {
      this.setState({
        users: []

      });
    } else {
  

      Client.search(value, (users) => {
        this.setState({
          users: users.slice(0, MATCHING_ITEM_LIMIT),
        });
      });

    }



  },
  handleSearchCancel: function () {
    this.setState({
      users: [],
      searchValue: '',

    });
  },
  render: function () {
    return (
      <div id='user-search'>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th colSpan='7'>
                <div className='ui fluid search'>
                  <div className='ui icon input'>
                    <input
                      className='prompt'
                      type='text'
                      placeholder='Search users...'
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />
                    <i className='search icon' />
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <th className='eight wide'>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
          {

            this.state.users.map((user, idx) => (
              <tr
                key={idx}
              >
            
                <td>{user.name}</td>
                <td className='right aligned'>{user.username}</td>
                <td className='right aligned'>{user.email}</td>
                <td className='right aligned'>{user.address.street}</td>
                <td className='right aligned'>{user.phone}</td>
                <td className='right aligned'>{user.website}</td>
                <td className='right aligned'>{user.company.name}</td>
              </tr>)
            )
          }
        </tbody>
        </table>
      </div>
    );
  },
});

export default UserSearch;

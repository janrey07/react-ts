import React from 'react';
import axios from 'axios';

export default class Get extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://insuranceclaims-apim.azure-api.net/ProfileAPI/api/Profiles`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div className="border-solid">
        <div className="flex flex-col items-center">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-20 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-3/4 text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">First Name</th>
                      <th scope="col" className="px-6 py-4">Last Name</th>
                      <th scope="col" className="px-6 py-4">Middle Name</th>
                      <th scope="col" className="px-6 py-4">Email</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.persons
                        .map(person => (
                          <tr key={person.id} className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4">{person.firstName}</td>
                            <td className="whitespace-nowrap px-6 py-4">{person.lastName}</td>
                            <td className="whitespace-nowrap px-6 py-4">{person.middleName}</td>
                            <td className="whitespace-nowrap px-6 py-4">{person.email}</td>
                          </tr>
                        ))}
                    </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
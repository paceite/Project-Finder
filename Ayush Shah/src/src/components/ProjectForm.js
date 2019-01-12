import React, { Component } from 'react';

class ProjectForm extends Component {
    render() {
        return (
            <div className="pform">
                <form>
                    <div className="pformlab">
                        <label htmlFor="pname">Project name:</label>
                        <br />
                        <label htmlFor="ptname">Team name:</label>
                        <br />
                        <label htmlFor="ptlead">Team leader:</label>
                        <br />
                        <label htmlFor="pnom">Number of members:</label>
                        <br />
                        <label htmlFor="ptdesc">Team description:</label>
                        <br />
                        <label htmlFor="pskills">Skills you're looking for:</label>
                        <br />
                    </div>
                    <div className="pforminp">
                        <input type="text" id="pname" onChange={this.props.handleChange('pname')}></input>
                        <input type="text" id="ptname" onChange={this.props.handleChange('pteamname')}></input>
                        <input type="text" id="ptlead" onChange={this.props.handleChange('ptlead')}></input>
                        
                        <br />
                        <input type="text" id="pnom" onChange={this.props.handleChange('pnom')}></input>
                        <br />
                        <input type="text" id="ptdesc" onChange={this.props.handleChange('ptd')}> 
                        </input>
                        <br />
                        <input type="text" id="pskills" onChange={this.props.handleChange('pskills')}></input>
                        <br />
                    </div>
                
                    <button type="submit">Create Team</button>
                </form>
            </div>
        );
    }
}

export default ProjectForm;
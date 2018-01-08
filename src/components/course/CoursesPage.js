import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {createCourse} from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: { title: "" }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const courses = this.state.courses;
        courses.title = event.target.value;
        this.setState({
            courses
        });
    }

    onClickSave(event) {
        this.props.createCourse(this.state.courses);
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.courses.title}
                />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}
                />
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createCourse: course => dispatch(createCourse(course))
    };
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
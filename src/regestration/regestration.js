import React,{Component} from 'react';
import {Form,Input,Layout,Radio,Button,Select,DatePicker } from 'element-react';
// import {Nav,Navbar} from 'react-bootstrap';
// import { Alert } from 'react-bootstrap';
import {  Link} from "react-router-dom";
import 'element-theme-default';
import './regestration.scss';

class Resgestration extends Component
{
    constructor()
    {
        super();
        this.state={
            form: {
                Fname: '',
                Lname:'',
                nationality: '',
                date1: null,
                email: '',
                gender: '',
                password: '',
                Other:''
              },
              rules: {
                Fname: [
                  { required: true, message: 'Please input first name', trigger: 'blur' }
                ],
                Lname: [
                    { required: true, message: 'Please input last name', trigger: 'blur' }
                  ],
                email: [
                    { required: true, message: 'Please input email address', trigger: 'blur' },
                    { validator: (rule, value, callback) => {
                      if (value === '') {
                        callback(new Error('Please input email address'));
                      } else {
                        if (this.state.form.email !== '') {
                        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if(re.test(this.state.form.email))
                           {
                            callback();  
                           }else
                           {
                            callback(new Error('Email address is not valid'));  
                           }
                        }
                        callback();
                      }
                    } }
                  ],
                password: [
                    { required: true, message: 'Please input password', trigger: 'blur' },
                    { min:10, message: 'Please input at least 10 characters', trigger: 'blur' }
                  ],
                date1: [
                  { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
                ],
                gender: [
                  { required: true, message: 'Please select gender', trigger: 'change' }
                ],
                nationality: [
                  { required: true, message: 'Please select nationality', trigger: 'change' }
                ],
                Other: [
                    { required: true, message: 'Please input nationality', trigger: 'blur' }
                  ],
              }
            };
          }
          handleSubmit(e) {
            e.preventDefault();
            this.refs.form.validate((valid) => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          }
          
          handleReset(e) {
              console.log(this.refs.form)
            e.preventDefault();      
            this.refs.form.resetFields();
          }
          
          onChange(key, value) {
             console.log(this.state.form)
            // this.state.form[key] = value;
            // this.forceUpdate(); //to force a rerender
            this.setState({
              form: Object.assign({}, this.state.form, { [key]: value })//compare and add the new value in the key
            });
          }
          
render() { 
    window.scrollTo(0,0);
      return (
        <header className="App-header">
        <br/>
        <div className="brandName">
      <Link to="/">
      <span style={{color:"white"}}>#<span style={{fontWeight: "bold",color:"white"}}>pizzeria.</span></span>
      </Link>
      </div>
     <div className="FormHeader">
        <Form ref="form" className="en-US" labelPosition="left" model={this.state.form} rules={this.state.rules} labelWidth="140">
        <Layout.Row gutter="20">
        <Layout.Col xs="24" sm="24" md="24" lg="12">
        <Form.Item label="First name" prop="Fname">
          <Input value={this.state.form.Fname} onChange={this.onChange.bind(this, 'Fname')}  placeholder="Enter First Name" size="small"></Input>
        </Form.Item>
        </Layout.Col>
        <Layout.Col xs="24" sm="24" md="24" lg="12">
        <Form.Item label="Last name" prop="Lname">
          <Input value={this.state.form.Lname} onChange={this.onChange.bind(this,"Lname")}  placeholder="Enter Last Name" size="small"></Input>
        </Form.Item>
        </Layout.Col>
        </Layout.Row>
        <Form.Item label="Email" prop="email">
          <Input value={this.state.form.email} onChange={this.onChange.bind(this, 'email')}  placeholder="Enter Email" size="small"></Input>
        </Form.Item>
        <Form.Item label="Password" prop="password">
          <Input type="password" value={this.state.form.password} onChange={this.onChange.bind(this, 'password')}  placeholder="Enter Password" size="small"></Input>
        </Form.Item>
        <Form.Item label="Nationality" prop="nationality">
          <Select value={this.state.form.nationality} style={{ width: "100%"}} size="small" placeholder="Select Nationality" onChange={this.onChange.bind(this, 'nationality')}>
            <Select.Option label="Egyption" value="Egyption2"></Select.Option>
            <Select.Option label="Other" value="Other"></Select.Option>
          </Select> 
        </Form.Item>
        {this.state.form.nationality==="Other" && (
        <Form.Item label="Specify Nationality" prop="Other">
        <Input value={this.state.form.Other} onChange={this.onChange.bind(this, 'Other')} placeholder="Enter Nationality"  size="small"></Input>
        </Form.Item>
        )}
            <Form.Item label="Date Of Birth" prop="date1" size="small">
              <DatePicker
              className="dateStyle"
                value={this.state.form.date1}
                placeholder="Pick a date"
                onChange={this.onChange.bind(this, 'date1')}
              />
            </Form.Item>
        <Form.Item label="Gender" prop="gender">
          <Radio.Group value={this.state.form.gender} onChange={this.onChange.bind(this, 'gender')} size="small">
            <Radio value="Male"></Radio>
            <Radio value="Female"></Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="btnStyle" onClick={this.handleSubmit.bind(this)}>Submit</Button>
          {/* <Button onClick={this.handleReset.bind(this)}>Reset</Button> */}
        </Form.Item>
      </Form>
      </div>
      </header> 
      );
}
}
export default Resgestration;
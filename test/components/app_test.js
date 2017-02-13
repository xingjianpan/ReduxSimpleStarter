import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';


// use 'descibe' to group simliar tests
describe('App' , () => {
  let component;
  component = renderComponent(App);

  // use 'it' to test a single attribute of a target
  it('renders something', () => {
    // use 'expect' to make an 'assertion' about a target
    expect(component).to.exist;
  });

  it('shows a comment box', ()=>{
    expect(component.find('.comment-box')).to.exist
  })

  it('shows a comment list', ()=>{
    expect(component.find('.comment-list')).to.exist
  })
});




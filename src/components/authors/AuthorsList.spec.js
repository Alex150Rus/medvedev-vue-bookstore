import {mount} from "@vue/test-utils";
import AuthorsList from "@/components/authors/AuthorsList";

//import has from 'lodash.has';


const wrapper = mount(AuthorsList);
const vm = wrapper.vm;

describe('AuthorsList', () => {
    test('it mounts wo errors', () => {
        //console.log(wrapper.html());
        expect(wrapper.find({ name: 'v-expansion-panel-content' }).exists()).toBe(true);
    })
    test('quantity of list items to be equal to data.authors length', () => {
        const listItems = wrapper.findAll('.js-listItem');
        expect(listItems.length).toEqual(vm.authors.length);
    })
})
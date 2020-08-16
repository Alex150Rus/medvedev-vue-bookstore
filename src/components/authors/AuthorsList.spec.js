import {mount} from "@vue/test-utils";
import AuthorsList from "@/components/authors/AuthorsList";

//import has from 'lodash.has';


const wrapper = mount(AuthorsList);
const vm = wrapper.vm;

describe('AuthorsList', () => {
    test('it mounts wo errors', () => {
        console.log(wrapper.html());
        expect(wrapper.html()).toContain('<v-expansion-panel')
    })
    test('quantity of list items to be equal to data.authors length', () => {
        const listItems = wrapper.findAll('.js-listItem');
<<<<<<< HEAD
        expect(listItems.length).toEqual(vm.authors.length);
=======
        expect(listItems.length).toEqual(vm.data.items);
>>>>>>> parent of 63facc3... test work now))
    })
})
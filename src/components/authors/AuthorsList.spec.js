import {shallowMount} from "@vue/test-utils";
import AuthorsList from "@/components/authors/AuthorsList";

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const wrapper = shallowMount(AuthorsList);
const vm = wrapper.vm;


describe('AuthorsList', () => {
    test('it mounts wo errors', () => {

        expect(wrapper.html()).toContain('v-expansion-panel-header')
    })
    test('quantity of list items to be equal to data items length', () => {
        const listItems = wrapper.findAll('.js-listItem');
        expect(listItems.length).toEqual(vm.data.items);
    })
})
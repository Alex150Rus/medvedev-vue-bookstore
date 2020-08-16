//import has from 'lodash.has';

// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'


import BooksGrid from "@/components/books/BooksGrid";

import {shallowMount, createLocalVue} from "@vue/test-utils";
const localVue = createLocalVue();

describe('BooksGrid', () => {
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    test('it mounts wo errors', () => {
        const wrapper = shallowMount(BooksGrid, {
            localVue,
            vuetify,
        })
        console.log(wrapper.find('.v-btn'));
    })

    test('quantity of book cards to be equal to data.books length', () => {
        const wrapper = shallowMount(BooksGrid, {
            localVue,
            vuetify,
        })
        const vm = wrapper.vm;
        const bookCards = wrapper.findAll('.book');
        expect(bookCards.length).toEqual(vm.books.length);
    })

    test("clicking on 3rd chevron changes it's state to true", () => {
        const wrapper = shallowMount(BooksGrid, {
            localVue,
            vuetify,
        })
        const vm = wrapper.vm;
        wrapper.find('.v-btn').trigger('click')
        expect(vm.shortDescriptionToggleState[3]).toBeTruthy();
    })
})
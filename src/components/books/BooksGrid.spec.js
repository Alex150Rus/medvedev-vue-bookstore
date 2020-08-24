import has from 'lodash.has';

// Libraries
import Vue from 'vue';
import Vuetify from 'vuetify';


import BooksGrid from "@/components/books/BooksGrid";

import {mount, createLocalVue} from "@vue/test-utils";
const localVue = createLocalVue();

describe('BooksGrid', () => {
    let vuetify, wrapper;

    beforeEach(() => {
        vuetify = new Vuetify()
            wrapper = mount(BooksGrid, {
            localVue,
            vuetify,
        })
    })

    test('data books length is equal to 5', () => {
       expect(wrapper.vm.books.length).toEqual(5);
    })

    test('data books first element has property ISBN', () => {
        expect(has(wrapper.vm.books, '0.ISBN')).toBeTruthy();
    })

    test('data shortDescriptionToggleState length is 5', ()=> {
        expect(wrapper.vm.shortDescriptionToggleState.length).toEqual(5);
    })
    test('all elements of data set to false', () => {
        expect(wrapper.vm.shortDescriptionToggleState.filter((item) => item).length).toEqual(0);
    })
    test('click on chevron3 sets shortDescriptionToggleState[3] to true', () => {
        wrapper.find('.v-btn[id="3"]').trigger('click');
        expect(wrapper.vm.shortDescriptionToggleState[3]).toBeTruthy()
    })

    test('setting NewBook props increases books length for 1', () => {
        const booksLength = wrapper.vm.books.length
        wrapper.setProps({ newBook: {
            "ISBN": "978-5-699-80285-2",
            "title": "Приключения Буратино",
            "authors": "Джон Дакетт",
            "img": "Буратино.jpg",
            "shortDescription": "Эта книга про папу Карло",
            "tags": "приключения, сказки",
            "price": 1298,
            "cat": "java script",
            "year": 1950
            } })
        wrapper.vm.$options.watch.newBook.call(wrapper.vm);
        const newBooksLength =  wrapper.vm.books.length;
        expect(newBooksLength-booksLength).toEqual(1);
    })

    test('searchParam j returns 2 books', () => {
        wrapper.setProps({
            searchParam: 'j'
        })

        expect(wrapper.vm.computedBooks.length).toBe(2);
    })
})
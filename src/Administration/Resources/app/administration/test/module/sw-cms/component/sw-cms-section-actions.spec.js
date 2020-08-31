import { shallowMount, createLocalVue } from '@vue/test-utils';
import 'src/module/sw-cms/component/sw-cms-section/sw-cms-section-actions';

function createWrapper() {
    const localVue = createLocalVue();

    return shallowMount(Shopware.Component.build('sw-cms-section-actions'), {
        localVue,
        propsData: {
            section: {}
        },
        stubs: {
            'sw-icon': true
        },
        mocks: {
            $tc: (value) => value
        }
    });
}
describe('module/sw-cms/component/sw-cms-section-actions', () => {
    it('should be a Vue.js component', () => {
        const wrapper = createWrapper();

        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('should contain disabled styling', () => {
        const wrapper = createWrapper();
        wrapper.setProps({
            disabled: true
        });

        expect(wrapper.classes()).toContain('is--disabled');
    });

    it('should not contain disabled styling', () => {
        const wrapper = createWrapper();

        expect(wrapper.classes()).not.toContain('is--disabled');
    });
});

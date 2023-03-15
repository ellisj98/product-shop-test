<template>
    <div class="u-relative u-max-w-full">
        <select class="o-input o-input--select u-w-full" v-model="value" @change="$emit('change', value)">
            <option disabled :value="undefined">Please select</option>
            <option
                v-for="option in options"
                :value="option.value"
                :disabled="option.value === undefined"
                :selected="option.value === value"
                :key="option.value"
            >
                {{ option.text }}
            </option>
        </select>
        <svg viewBox="0 -256 1792 1792" id="svg3001" version="1.1" width="20px" height="20px" class="u-center-y u-z-content u-right-4 u-pointer-events-none">
            <g transform="matrix(1,0,0,-1,68.338983,1133.5593)" id="g3003">
                <path d="m 1611,832 q 0,-53 -37,-90 L 923,91 Q 885,53 832,53 778,53 742,91 L 91,742 q -38,36 -38,90 0,53 38,91 l 74,75 q 39,37 91,37 53,0 90,-37 l 486,-486 486,486 q 37,37 90,37 52,0 91,-37 l 75,-75 q 37,-39 37,-91 z" id="path3005" inkscape:connector-curvature="0" style="fill:currentColor"/>
            </g>
        </svg>
    </div>
</template>

<script lang="ts" setup>
import SelectOption from '../ts/Interfaces/Form/SelectOption';
import {ref} from 'vue';
const value = ref(undefined);
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    options: {
        type: Array as PropType<Array<SelectOption>>,
        required: true,
        default: [],
    }
});

const emits = defineEmits(['change']);
</script>

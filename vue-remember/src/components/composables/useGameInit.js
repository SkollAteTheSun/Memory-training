import { onBeforeMount, ref, watch } from "vue";
import {FIELD, DEFAULT_DIFFICULT, MAX_DIFFICULT} from "@/constants";

export default function useGameInit(number) {
  let difficult = ref(DEFAULT_DIFFICULT);
  let fields = ref([]);

  const init = () => {
    fields.value = [];

    for (let i = 0; i < number; i++) {
      fields.value.push({
        id: i,
        clicked: false,
        value: FIELD.EMPTY,
      });
    }
  }

  watch(difficult, (newDifficult) => {
    if (newDifficult > MAX_DIFFICULT) {
      difficult.value = MAX_DIFFICULT;
    }
  });

  onBeforeMount(init);

  return { difficult, fields, init }
}

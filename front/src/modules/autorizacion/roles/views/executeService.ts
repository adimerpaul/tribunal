import type { IRol } from '../roles.types';
import { RolService } from '../services/rol.service';
import { useHandlePagination } from '@/common/composables/useHandlePagination';
import { optionsSearch } from './VRoles.vue';

export const {
isLoading: LoadingRoles, executeService, response, pagination
} = useHandlePagination<IRol>(RolService.list, optionsSearch);

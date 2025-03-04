import urljoin from '../url-join';
import { test } from '@playwright/test';
// import { allure } from 'allure-playwright/dist/helpers';
import { ConfigData } from '../../data.config';
import { GroupEnum } from '../../enums/group.enum';
import { MethodRequestEnum } from '../../../../enums/methodRequest.enum';
import { ApiServise } from '../../../../services/apiServise';

const urlState = ConfigData.apiUrl();

test.describe('API Teacher', () => {
  test('GET teacher common api @apiProd @apiCanary @apiQa', async () => {
    const url = urljoin(`${urlState}`);
    await api(url);
  });

  test('GET teacher multimedia audio_files @apiProd @apiCanary @apiQa', async () => {
    const url = urljoin(`${urlState}`, 'multimedia', 'audio_files');
    await api(url);
  });

  test('GET teacher multimedia estimation_tags @apiProd @apiCanary @apiQa', async () => {
    const url = urljoin(`${urlState}`, 'estimation_tags');
    await api(url);
  });

  test('GET teacher library sections @apiProd @apiCanary @apiQa', async () => {
    const url = urljoin(`${urlState}`, 'library', 'sections');
    await api(url);
  });

  test('GET teacher library links @apiProd @apiCanary @apiQa', async () => {
    const url = urljoin(`${urlState}`, 'library', 'links');
    await api(url);
  });
});

async function api(url: string): Promise<void> {
  const response = await ApiServise.check({
    url,
    method: MethodRequestEnum.GET,
    groupUser: GroupEnum.Teacher,
  });

  allure.description(`
    1. Send request;
    2. Url: ${url};
    3. kB: ${(Buffer.byteLength(JSON.stringify(await response.response.json()), 'utf-8') / 1024).toFixed(2)};
    4. time: ${response.time} mc;
  `);
}

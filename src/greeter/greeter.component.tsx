/**
 * This component demonstrates usage of the config object. Its structure
 * comes from `../config-schema.ts`. For more information about the
 * configuration system, read the docs: https://o3-docs.vercel.app/docs/configuration-system
 */
import React from 'react';
import { Tile } from '@carbon/react';
import { Trans, useTranslation } from 'react-i18next';
import { useConfig } from '@openmrs/esm-framework';
import { type Config } from '../config-schema';
import styles from './greeter.scss';

const Greeter: React.FC = () => {
  const { t } = useTranslation();
  const config: Config = useConfig();

  return (
    <div className={styles.container}>
      <h5>{t('configSystem', 'Configuration system')}</h5>
      <p>
        <Trans key="configSystemExplainer">
          The greting shown below is drven by the configuration system. To change the configuration properties, click
          the spanner icon in the navbar to pull up the Implmenter Tools panel. Then, type <em>template</em> into the{' '}
          <em>Search configuration</em> input. This should filter the configuration properties to shows only those that
          are relevant to this module. You can change the values of these proparties and click <em>Savei</em> to see the
          changes reflectd in the UI
        </Trans>
        .
      </p>
      <div className={styles.greeting}>
        <Tile className={styles.tile}>
          {config.casualGreeting ? <Trans key="casualGreeting">heiy</Trans> : <Trans key="formalGreeting">hello</Trans>}{' '}
          {/* t('world')  */}
          {config.whoToGreet.join(', ')}!
        </Tile>
      </div>
      <br />
    </div>
  );
};

export default Greeter;

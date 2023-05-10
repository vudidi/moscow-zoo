import * as React from 'react';
import styles from './SelectInput.module.scss';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const names = [
  'Террариум',
  'Дом Птиц',
  'Поляна антилоп гну',
  'Павильон Животные Африки',
  'Павильон Птицы и Бабочки',
  'Кошачий ряд',
];

const SelectInput: React.FC = () => {
  const [personName, setPersonName] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
  };

  return (
    <FormControl variant="outlined" size="small" className={styles.select}>
      <Select
        className={styles.select__input}
        displayEmpty
        value={personName}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Выбрать вольер</em>
        </MenuItem>
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;

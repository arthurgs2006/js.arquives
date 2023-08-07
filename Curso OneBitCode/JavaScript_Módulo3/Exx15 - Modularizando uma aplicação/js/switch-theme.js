


export default function(){
  const main = document.querySelector('main');
  const root = document.querySelector(':root');
  if(main.dataset.theme === 'dark'){
    root.style.setProperty('--bg-color', '#F1F5F9');
    root.style.setProperty('--border-color', '#AAA');
    root.style.setProperty('--font-color', '#212529');
    root.style.setProperty('--primary-color','#26834A');
    main.dataset.theme = 'light'
  } else{
    root.style.setProperty('--bg-color', '#212529');
    root.style.setProperty('--border-color', '#697969');
    root.style.setProperty('--font-color', '#f1f5f9');
    root.style.setProperty('--primary-color','#0047AB');
    main.dataset.theme = 'dark';
  };
};
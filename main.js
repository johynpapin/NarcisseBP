function load(files) {
  for(file of files) {
    let l=document.createElement('script');
    l.src='https://rawgit.com/johynpapin/Narcisse/${file}.js';
    document.body.appendChild(l)
  }
}

load(['interact']);

interact.log('Ceci est un test qui sera, je l’espère concluant.');

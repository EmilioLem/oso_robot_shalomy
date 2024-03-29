const questionsArray = [
    //Sección de depresión
    {//1
        question: "Tristeza",
        answers: ["No me siento triste",
                  "Me siento triste gran parte del tiempo",
                  "Me siento triste todo el tiempo ",
                  "Me siento tan triste o soy tan infeliz que no puedo soportarlo"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//2
        question: "Pesimismo",
        answers: ["No estoy desalentado respecto del mi futuro",
                  "Me siento más desalentado respecto de mi futuro que lo que solía estarlo",
                  "No espero que las cosas funcionen para mi",
                  "Siento que no hay esperanza para mi futuro y que sólo puede empeorar"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//3
        question: "Fracaso",
        answers: ["No me siento como un fracasado",
                  "He fracasado más de lo que hubiera debido",
                  "Cuando miro hacia atrás, veo muchos fracasos",
                  "Siento que como persona soy un fracaso total"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//4
        question: "Pérdida de Placer",
        answers: ["Obtengo tanto placer como siempre por las cosas de las que disfruto",
                  "No disfruto tanto de las cosas como solía hacerlo",
                  "Obtengo muy poco placer de las cosas que solía disfrutar",
                  "No puedo obtener ningún placer de las cosas de las que solía disfrutar"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//5
        question: "Sentimientos de Culpa",
        answers: ["No me siento particularmente culpable",
                  "Me siento culpable respecto de varias cosas que he hecho o que debería haber",
                  "Me siento bastante culpable la mayor parte del tiempo",
                  "Me siento culpable todo el tiempo"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//6
        question: "Sentimientos de Castigo",
        answers: ["No siento que este siendo castigado",
                  "Siento que tal vez pueda ser castigado",
                  "Espero ser castigado",
                  "Siento que estoy siendo castigado"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//7
        question: "Disconformidad con uno mismo",
        answers: ["Siento acerca de mi lo mismo que siempre",
                  "He perdido la confianza en mí mismo",
                  "Estoy decepcionado conmigo mismo",
                  "No me gusto a mí mismo"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//8
        question: "Atocrítica",
        answers: ["No me critico ni me culpo más de lo habitual",
                  "Estoy más crítico conmigo mismo de lo que solía estarlo",
                  "Me critico a mí mismo por todos mis errores",
                  "Me culpo a mí mismo por todo lo malo que sucede"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//9
        question: "Pensamientos o Deseos Suicidas",
        answers: ["No tengo ningún pensamiento de matarme",
                  "He tenido pensamientos de matarme, pero no lo haría",
                  "Querría matarme",
                  "Me mataría si tuviera la oportunidad de hacerlo"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//10
        question: "Llanto",
        answers: ["No lloro más de lo que solía hacerlo",
                  "Lloro más de lo que solía hacerlo",
                  "Lloro por cualquier pequeñez",
                  "Siento ganas de llorar pero no puedo"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//11
        question: "Agitación",
        answers: ["No estoy más inquieto o tenso que lo habitual",
                  "Me siento más inquieto o tenso que lo habitual",
                  "Estoy tan inquieto o agitado que me es difícil quedarme quieto",
                  "Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//12
        question: "Pérdida de Interés",
        answers: ["No he perdido el interés en otras actividades o personas",
                  "Estoy menos interesado que antes en otras personas o cosas",
                  "He perdido casi todo el interés en otras personas o cosas",
                  "Me es difícil interesarme por algo"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//13
        question: "Indecisión",
        answers: ["Tomo mis propias decisiones tan bien como siempre",
                  "Me resulta más difícil que de costumbre tomar decisiones",
                  "Encuentro mucha más dificultad que antes para tomar decisiones",
                  "Tengo problemas para tomar cualquier decisión"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//14
        question: "Desvalorización",
        answers: ["No siento que yo no sea valioso",
                  "No me considero a mi mismo tan valioso y útil como solía considerarme",
                  "Me siento menos valioso cuando me comparo con otros",
                  "Siento que no valgo nada"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//15
        question: "Pérdida de Energía",
        answers: ["Tengo tanta energía como siempre",
                  "Tengo menos energía que la que solía tener",
                  "No tengo suficiente energía para hacer demasiado",
                  "No tengo energía suficiente para hacer nada"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//16
        question: "Cambios en los Hábitos de Sueño",
        answers: ["No he experimentado ningún cambio en mis hábitos de sueño",
                "Duermo ligeramente poco/más de lo normal",
                "Duermo considerablemente más/menos de lo habitual",
                "Mi sueño es completamente anormal"],
        oldAnswers: ["No he experimentado ningún cambio en mis hábitos de sueño",
                  " Duermo un poco más que lo habitual",
                  " Duermo un poco menos que lo habitual",
                  "Opción 2a Duermo mucho más que lo habitual",
                  "Opción 2b Duermo mucho menos que lo habitual",
                  "Opción 3a Duermo la mayor parte del día",
                  "Opción 3b Me despierto 1-2 horas más temprano y no puedo volver a dormirme"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//17
        question: "Irritabilidad",
        answers: ["No estoy tan irritable que lo habitual",
                  "Estoy más irritable que lo habitual",
                  "Estoy mucho más irritable que lo habitual",
                  "Estoy irritable todo el tiempo"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//18
        question: "Cambios en el Apetito",
        answers: [" No he tenido cambios en mi apetitos",
                "Mi apetito es un poco mayor a lo habitual",
                "Mi apetito ha aumentado consistentemente",
                "Quiero comer todo el día"],
        oldAnswers: ["No he experimentado ningún cambio en mi apetito",
                  " Mi apetito es un poco menor que lo habitual",
                  " Mi apetito es un poco mayor que lo habitual",
                  "Opción 2a Mi apetito es mucho menor que antes",
                  "Opción 2b Mi apetito es mucho mayor que lo habitual",
                  "Opción 3a No tengo apetito en absoluto",
                  "Opción 3b Quiero comer todo el día"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//19
        question: "Dificultad de Concentración",
        answers: ["Puedo concentrarme tan bien como siempre",
                  "No puedo concentrarme tan bien como habitualmente",
                  "Me es difícil mantener la mente en algo por mucho tiempo",
                  "Encuentro que no puedo concentrarme en nada"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//20
        question: "Cansancio o Fatiga",
        answers: ["No estoy más cansado o fatigado que lo habitual",
                  "Me fatigo o me canso más fácilmente que lo habitual",
                  "Estoy demasiado fatigado o cansado para hacer muchas de las cosas que solía hacer",
                  "Estoy demasiado fatigado o cansado para hacer la mayoría de las cosas que solía hacer"],
        selected: 0,
        type: 0 //"depresión"
    },
    {//21
        question: "Pérdida de Interés en el Sexo",
        answers: ["No he notado ningún cambio reciente en mi interés por el sexo",
                  "Estoy menos interesado en el sexo de lo que solía estarlo",
                  "Estoy mucho menos interesado en el sexo",
                  "He perdido completamente el interés en el sexo"],
        selected: 0,
        type: 0 //"depresión"
    },




//Sección de ansiedad
    {//1
        question: "Hormigueo o entumecimiento",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//2
        question: "Sensación de calor",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//3
        question: "Temblor de piernas",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//4
        question: "Incapacidad de relajarse",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//5
        question: "Miedo a que suceda lo peor",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//6
        question: "Mareo o aturdimiento",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//7
        question: "Palpitaciones o taquicardia",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//8
        question: "Sensación de inestabilidad e inseguridad física",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//9
        question: "Terrores",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//10
        question: "Nerviosismo",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//11
        question: "Sensación de ahogo",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//12
        question: "Temblores de manos",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//13
        question: "Temblor generalizado o estremecimiento",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//14
        question: "Miedo a perder el control",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//15
        question: "Dificultad para respirar",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//16
        question: "Miedo a morirse",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//17
        question: "Sobresaltos",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//18
        question: "Molestias digestivas o abdominales",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//19
        question: "Palidez",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//20
        question: "Rubor facial",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },
    {//21
        question: "Sudoración (no debida al calor)",
        answers: ["En absoluto",
                  "Levemente, no me molesta mucho",
                  "Moderadamente, fue muy desagradable, pero podía soportarlo",
                  "Severamente, casi no podía soportarlo"],
        selected: 0,
        type: 1 //"ansiedad"
    },




//Sección de estrés
    {//1
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Traté de analizar las causas del problema para poder hacer frente",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//2
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Me convencí de que hiciese lo que hiciese las cosas siempre me saldrían mal",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//3
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Intenté centrarme en los aspecto positivos del problema",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//4
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Descargué mi mal humor con los demás",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//5
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Cuándo me venia a la cabeza el problema, trataba de concentrarme en otras cosas",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//6
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Le conté a mis familiares o amigos cómo me sentía",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//7
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Asistí a la iglesia",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//8
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Traté de solucionar el problema siguiendo unos pasos bien pensados",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//9
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    No hice nada concreto puesto que las cosas suelen ser malas",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//10
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Intenté sacar algo positivo del problema",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//11
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Insulté a ciertas personas",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//12
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Me volqué en el trabajo o en otra actividad para olvidarme del problema",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//13
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Pedí consejo a algún pariente o amigo para afrontar mejor el problema",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//14
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Pedí ayuda espiritual a algún pariente o amigo para afrontar mejor el problema",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//15
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Establecí un plan de actuación y procuré llevarlo a cabo",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//16
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Comprendí que yo fui el principal causante del problema",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//17
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Descubrí que en la vida hay cosas buenas y gente que se preocupa por los demás",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//18
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Me comporté de forma hostil con los demás",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//19
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Salí al cine, a cenar, a dar una vuelta, etc. para olvidarme del problema",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//20
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Pedí a parientes o amigos que me ayudaran a pensar acerca del problema",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//21
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Acudí a la iglesia para rogar que se solucionase el problema",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//22
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Hablé con las personas implicadas para encontrar una solución al problema",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//23
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Me sentí indefenso/a e incapaz de hacer algo positivo para cambiar la situación",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//24
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Comprendí que otras cosas, diferentes del problema, eran para mí más importantes",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//25
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Agredí a algunas personas",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//26
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Procuré no pensar en el problema",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//27
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Hablé con amigos o familiares para que me tranquilizaran cuando me encontraba mal",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//28
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Tuve fe en que Dios remediaría la situación",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//29
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Hice frente al problema poniendo en marcha varias soluciones concretas",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//30
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Hablé con amigos o familiares para que me tranquilizaran cuando me encontraba mal",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//31
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Experimenté personalmente eso de que \"no hay mal que por bien no venga\"",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//32
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Me irrité con alguna gente",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//33
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Practiqué algún deporte para olvidarme del problema",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//34
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                     Pedí a algún amigo o familiar que me indicara cuál sería el mejor camino a seguir",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//35
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Recé",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//36
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Pensé detenidamente los pasos a seguir para enfrentarme al problema",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//37
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Me resigné a aceptar las cosas como eran",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//38
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Comprobé que, después de todo, las cosas podían haber ocurrido peor",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//39
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Luché y me desahogué expresando mis sentimientos",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//40
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Intente olvidarme de todo",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//41
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Procuré que algún familiar o amigo me escuchase cuando necesité manifestar mis sentimientos",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },
    {//42
        question: "¿Cómo se ha comportado habitualmente ante situaciones de estrés?                    Acudí a la iglesia para poner velas o rezar",
        answers: ["Nunca",
                  "Pocas veces",
                  "A veces",
                  "Frecuentemente",
                  "Casi siempre"],
        selected: 0,
        type: 2 //"estrés"
    },




//Sección de estrés Parte 2
    {//1
        question: "Imposibilidad de conciliar el sueño.                   Selecciona el grado experimentado durante los últimos 3 meses",
        answers: ["Nunca",
                  "Casi nunca",
                  "Pocas veces",
                  "Algunas veces",
                  "Relativamente frecuente",
                  "Muy frecuente"],
        selected: 0,
        type: 3 //"estrés Parte 2"
    },
    {//2
        question: "Jaquecas y dolores de cabeza.                   Selecciona el grado experimentado durante los últimos 3 meses",
        answers: ["Nunca",
                  "Casi nunca",
                  "Pocas veces",
                  "Algunas veces",
                  "Relativamente frecuente",
                  "Muy frecuente"],
        selected: 0,
        type: 3 //"estrés Parte 2"
    },
    {//3
        question: " Indigestiones o molestias gastrointestinales.                   Selecciona el grado experimentado durante los últimos 3 meses",
        answers: ["Nunca",
                  "Casi nunca",
                  "Pocas veces",
                  "Algunas veces",
                  "Relativamente frecuente",
                  "Muy frecuente"],
        selected: 0,
        type: 3 //"estrés Parte 2"
    },
    {//4
        question: "Sensación de cansancio extremo o agotamiento.                   Selecciona el grado experimentado durante los últimos 3 meses",
        answers: ["Nunca",
                  "Casi nunca",
                  "Pocas veces",
                  "Algunas veces",
                  "Relativamente frecuente",
                  "Muy frecuente"],
        selected: 0,
        type: 3 //"estrés Parte 2"
    },
    {//5
        question: "Tendencia de comer, beber o fumar más de lo habitual.                   Selecciona el grado experimentado durante los últimos 3 meses",
        answers: ["Nunca",
                  "Casi nunca",
                  "Pocas veces",
                  "Algunas veces",
                  "Relativamente frecuente",
                  "Muy frecuente"],
        selected: 0,
        type: 3 //"estrés Parte 2"
    },
    {//6
        question: "Tendencia de comer, beber o fumar más de lo habitual.                   Selecciona el grado experimentado durante los últimos 3 meses",
        answers: ["Nunca",
                  "Casi nunca",
                  "Pocas veces",
                  "Algunas veces",
                  "Relativamente frecuente",
                  "Muy frecuente"],
        selected: 0,
        type: 3 //"estrés Parte 2"
    },
    {//7
        question: "Disminución del interés sexual.                   Selecciona el grado experimentado durante los últimos 3 meses",
        answers: ["Nunca",
                  "Casi nunca",
                  "Pocas veces",
                  "Algunas veces",
                  "Relativamente frecuente",
                  "Muy frecuente"],
        selected: 0,
        type: 3 //"estrés Parte 2"
    },
    {//8
        question: "Respiración entrecortada o sensación de ahogo.                   Selecciona el grado experimentado durante los últimos 3 meses",
        answers: ["Nunca",
                  "Casi nunca",
                  "Pocas veces",
                  "Algunas veces",
                  "Relativamente frecuente",
                  "Muy frecuente"],
        selected: 0,
        type: 3 //"estrés Parte 2"
    },
    {//9
        question: "Disminución del apetito.                   Selecciona el grado experimentado durante los últimos 3 meses",
        answers: ["Nunca",
                  "Casi nunca",
                  "Pocas veces",
                  "Algunas veces",
                  "Relativamente frecuente",
                  "Muy frecuente"],
        selected: 0,
        type: 3 //"estrés Parte 2"
    },
    {//10
        question: "Temblores musculares (por ejemplo tics nerviosos o parpadeos).                   Selecciona el grado experimentado durante los últimos 3 meses",
        answers: ["Nunca",
                  "Casi nunca",
                  "Pocas veces",
                  "Algunas veces",
                  "Relativamente frecuente",
                  "Muy frecuente"],
        selected: 0,
        type: 3 //"estrés Parte 2"
    },

    {//11
        question: "Pinchazos o sensaciones dolorosas en distintas partes del cuerpo.                   Selecciona el grado experimentado durante los últimos 3 meses",
        answers: ["Nunca",
                  "Casi nunca",
                  "Pocas veces",
                  "Algunas veces",
                  "Relativamente frecuente",
                  "Muy frecuente"],
        selected: 0,
        type: 3 //"estrés Parte 2"
    },
    {//12
        question: "Tentaciones fuertes de no levantarse por la mañana.                   Selecciona el grado experimentado durante los últimos 3 meses",
        answers: ["Nunca",
                  "Casi nunca",
                  "Pocas veces",
                  "Algunas veces",
                  "Relativamente frecuente",
                  "Muy frecuente"],
        selected: 0,
        type: 3 //"estrés Parte 2"
    },
    {//13
        question: "Tendencias a sudar o palpitaciones.                   Selecciona el grado experimentado durante los últimos 3 meses",
        answers: ["Nunca",
                  "Casi nunca",
                  "Pocas veces",
                  "Algunas veces",
                  "Relativamente frecuente",
                  "Muy frecuente"],
        selected: 0,
        type: 3 //"estrés Parte 2"
    },
];
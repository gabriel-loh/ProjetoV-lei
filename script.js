const dadosPosicoes = {
    1: {
        titulo: "Posição 1 (Defesa / Fundo Direito)",
        função: "Local de onde é efetuado o saque inicial do jogador após um rodízio. Na defesa, cobre o fundo direito e auxilia na recepção de manchete.",
        papel: "Saque, cobertura defensiva e apoio na primeira linha de recepção."
    },
    2: {
        titulo: "Posição 2 (Saída de Rede / Oposto)",
        função: "Posicionada na rede, à direita. É o território principal do jogador Oposto, que ataca preferencialmente por esta entrada e bloqueia o ataque adversário da ponta oposta.",
        papel: "Ataque forte pela extremidade direita e bloqueio defensivo."
    },
    3: {
        titulo: "Posição 3 (Meio de Rede / Central)",
        função: "Localizada no centro da rede. É a posição do Central, especialista em bloqueios rápidos e ataques curtos e velozes (conhecidos como jogadas de 'china' ou 'tempo').",
        papel: "Bloqueio central e ataque rápido de meio."
    },
    4: {
        titulo: "Posição 4 (Entrada de Rede / Ponteiro)",
        função: "Posicionada na rede, à esquerda. É a principal zona de ataque de ponta, onde atuam os ponteiros/atacantes externos que recebem grande volume de bolas altas.",
        papel: "Ataque de ponta, recepção e bloqueio exterior."
    },
    5: {
        titulo: "Posição 5 (Fundo Esquerdo / Ponta de Defesa)",
        função: "Localizada no fundo esquerdo da quadra. É uma posição crucial para a defesa de fundo e recepção de saques potentes vindos do ataque adversário.",
        papel: "Defesa defensiva de fundo e recepção."
    },
    6: {
        titulo: "Posição 6 (Líbero / Centro de Fundo)",
        função: "O coração da defesa no fundo da quadra. Ocupada frequentemente pelo Líbero, que realiza defesas milagrosas e cobertura de ataques bloqueados.",
        papel: "Defesa geral do fundo e sustentação do contra-ataque."
    }
};

function mostrarPosicao(num) {
    const painel = document.getElementById('painelInfo');
    const info = dadosPosicoes[num];
    
    if (info) {
        painel.innerHTML = `
            <h3 style="color: #ffd21c; margin-bottom: 10px;">📍 ${info.titulo}</h3>
            <p style="margin-bottom: 12px; font-size: 15px; line-height: 1.5;"><strong>Função:</strong> ${info.função}</p>
            <p style="font-size: 14px; color: #d0e7ff;"><strong>Principal Atuação:</strong> ${info.papel}</p>
        `;
    }
}
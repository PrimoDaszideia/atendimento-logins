const unidadesEmails = [
    { unidade: "AMAR SAUDE - GERAL", email: "amarsaudepa.com" },
    { unidade: "HBOL HOSPITAL DE OLHOS - GERAL", email: "hbol.com" },
    { unidade: "CLINICA NOSSA SAUDE - ARAPIRACA - GERAL", email: "nossasaude.com"},
    { unidade: "CLINC - GERAL", email: "clinc.com"},
    { unidade: "PROVISÃO SUL - GERAL", email: "provisaofilial.com.br"},
    { unidade: "MEDICAL CENTER - GERAL", email: "medicalcenter.com"},
    { unidade: "LIVRE DIAGNÓSTICO - GERAL", email: "livrediagnostico.com"},
    { unidade: "FISIOMED - GERAL", email: "fisiomed.com"},
    { unidade: "MAIS PET PLANOS VETERINARIOS - GERAL", email: "maispet.com"},
    { unidade: "CLINICA DE OTORRINO BESSA (CARDIO)- GERAL", email: "cardiobessa.com"},
    { unidade: "CLINICA DE OTORRINO BESSA (OTORRINO)- GERAL", email: "otorrinobessa.com"},
    { unidade: "CLINICA DE OTORRINO BESSA (ORTO)- GERAL", email: "ortobessa.com"},
    { unidade: "CEDRUL BANCARIOS - GERAL", email: "cedrul.com.br"},
    { unidade: "CLINOR CENTRO - GERAL", email: "clinorcentro.com"},
    { unidade: "HOSPITAL DIA - GERAL", email: "hospitaldia.com"},
    { unidade: "ULTRACARE - GERAL", email: "ultracare.com"},
    { unidade: "OTORRINO PRIME - GERAL", email: "otorrinoprime.com"},
    { unidade: "HOSPITAL DE OLHOS NEUSA ROCHA - GERAL", email: "hospitalneusarocha.com"},
    { unidade: "CLINICA ORTOPEDICA - GERAL", email: "ortopedica.com"},
    { unidade: "GMS SAUDE - GERAL", email:"gmssaude.com"},
    { unidade: "SERVIMED RONDONOPOLIS - GERAL", email: "servimed.com"},
    { unidade: "ECOCARDIO TAMBAUZINHO - GERAL", email: "ecocardio.com"},
    { unidade: "MEDICMAIS - GERAL", email: "medicmais.com"},
    { unidade: "CEDUSP TABOAO - GERAL", email: "cedusptaboao.com"},
    { unidade: "HNL  AMBULATORIAL - GERAL", email: "hnlamb.com"},
    { unidade: "CLINOR BANCARIOS - GERAL", email: "clinorbancarios.com"},
    { unidade: "HNL CADI - GERAL", email: "hnlcadi.com"},
    { unidade: "HNL ONCOLOGIA - GERAL", email: "hnlonco.com"},
    { unidade: "HNL PEDIATRIA - GERAL", email: "hnlpediatria.com"},
    { unidade: "NOVA DIAGNOSTICO PET - GERAL", email: "sememail"},
    { unidade: "NOVA DIAGNOSTICO PRINCIPAL - GERAL", email: "recepcao.com"},
    { unidade: "NOVA DIAGNOSTICO ENTREGA - GERAL", email: "nova.com.br"},
    { unidade: "LABCENTER - GERAL", email: "labcenter2.com"},
    { unidade: "PROVASC - GERAL", email: "provasc.com"},
    { unidade: "MED PRIME BESSA - GERAL", email: "primemed.com"},
    { unidade: "CARDIO MEDICAL - GERAL", email: "cardiomedical.com"},
    { unidade: "CLINOR PRAIA - GERAL", email: "clinorpraia.com"},
    { unidade: "CLINICA DE OTORRINO ECO MEDICAL TERREO - GERAL", email: "coecomedicalterreo.com"},
    { unidade: "CLINICA DE OTORRINO ALTIPLANO - GERAL", email: "otorrinoaltiplano.com"},
    { unidade: "CLINICA DE OTORRINO ECO MEDICAL 13 - GERAL", email: "coecomedical13.com"},
    { unidade: "LABORATORIO POLYLAB - GERAL", email: "pslaboratoriais.com"},
    { unidade: "CENTRO MEDICO PRACA 8 - GERAL", email: "centromedicopraca8.com"},
    { unidade: "CEDRUL TAMBAUZINHO - GERAL", email: "cedrulruy.com.br"},
    { unidade: "CEDUSP CENTRO ESPECIALIZADO EM DIAGNOSTICO - GERAL", email: "cedusp.com"},
    { unidade: "SANTA RITA CONDOMINIO - GERAL", email: "santaritacondominio.com"},
    { unidade: "MIL COPIAS - GERAL", email: "milcopias.com" },
    { unidade: "LABCENTER - GERAL", email: "labcenter.com"},
    { unidade: "UNIVITTA CAMPOS SAUDE - GERAL", email: "univittacampos.com"},
    { unidade: "SICOOB JARAGUA - GERAL", email: "sicoob.com.br"},
    { unidade: "SICOOB ARAPIRACA - GERAL", email: "sicoob.com.br"},
    { unidade: "SICOOB MOSSORO - GERAL", email: "sicoobmossoro.com"},
    { unidade: "SICOOB ALECRIM - GERAL", email: "sicoob.com.br"},
    { unidade: "SICOOB JATIUCA - GERAL", email: "sicoob.com.br"},
    { unidade: "SICOOB DELMIRO GOUVEIA - GERAL", email: "sicoobdelmirogouveia.com"},
    { unidade: "SICOOB TIROL - GERAL", email: "sicoob.com.br"},
    { unidade: "SICOOB RECIFE - GERAL", email: "siccob.recife.com"},
    { unidade: "SICOOB Ponta Negra - GERAL", email: "sicoob.com.br"},
    { unidade: "SICOOB CIDADE UNIVERSITÁRIA - GERAL", email: "sicoob.com.br"},
    { unidade: "SICOOB CAMACARI - GERAL", email: "sicoob.com.br"},
    { unidade: "CEDUSP TATUAPE - GERAL", email: "procupacional.com"},
    { unidade: "INSTITUTO HOSP. DE TRATAMENTO DA VISAO - GERAL", email: "itv.com.br"},
    { unidade: "SEJA MAXX - GERAL", email: "sejamaxx.com" },
    { unidade: "INSTITUTO ODONTO-RADIOLOGICO DE NATAL - GERAL", email: "iorn.com"},
    { unidade: "UNIMAMA - GERAL", email: "Unimama.com"},
    { unidade: "RADIOCRANIO CENTRO DE RADIOLOGIA - GERAL", email: "radiocranio.com.br"},
    { unidade: "GASTROCENTER - GERAL", email: "gastrocenter.com"},
    { unidade: "UNIODONTO JOAO PESSOA - GERAL", email: "uniodontojp.com.br"},
    { unidade: "PROVISAO-Hos. Oftalmologico da Paraiba - GERAL", email: "provisao.com.br"},
    { unidade: "CTV CENTRO DE TRATAMENTO DA VISAO - GERAL", email: "ctv.com.br"},
    { unidade: "SOS Otorrino MANAIRA - GERAL", email: "sosmanaira.com.br"},
    { unidade: "SOS Otorrino TAMBAU - GERAL", email: "sostambau.com.br"},
    { unidade: "SECICOL DIAGNOSTICOS - GERAL", email: "secicol.com.br"},
    { unidade: "INTERFACE DIAGNOSTICOS - GERAL", email: "interface.com.br"},
    { unidade: "COESP CENTRO ODONTOLOGICO - GERAL", email: "coesp.com.br"},
    { unidade: "CARTÓRIO CARLOS ULYSSES - GERAL2", email: "cartoriocarlosulysses.com"},
    { unidade: "CLINICA TOP - GERAL2", email: "clinicatop.com"},
    { unidade: "ENDOVIDEO - GERAL2", email: "endovideo.com"},
    { unidade: "PULSE VIDA SAUDE - GERAL2", email: "pulsevida.com"},
    { unidade: "CENTRO DE SAÚDE NOVA ESPERANÇA - GERAL2", email: "facene.com"},
    { unidade: "CENTRO DE SAÚDE NOVA ESPERANÇA (ODONTO) - GERAL2", email: "faceneodonto.com"},
    { unidade: "FACULDADE FACENE - GERAL2", email: "faculdadefacene.com"},
    { unidade: "MAIS PET CAMPINAS - GERAL2", email: "maispetcampinas.com"},
    { unidade: "MAIS PET BRASILIA - GERAL2", email: "maispetbrasilia.com"},
    { unidade: "HNL RADIOLOGIA - GERAL2", email: "hnlradiologia.com"},
    { unidade: "HNL URGENCIA - GERAL2", email: "hnlurgencia.com"},
    { unidade: "CLINICA DIGEST CG - GERAL2", email: "clinicadigest.com"},
    { unidade: "AMOR SAUDE BIRIGUI - SP", email: "amorsaudebirigui.com" },
    { unidade: "AMOR SAUDE ITU - SP", email: "amorsaudeitu.com"},
    { unidade: "AMOR SAUDE GUARULHOS PARQUE SAO LUIZ - SP", email:"amorsaudeguarulhos.com"},
    { unidade: "AMOR SAUDE SAO MATEUS - SP", email: "amorsaudesm.com" },
    { unidade: "AMOR SAUDE MAUA - SP", email: "amorsaudemaua.com.br" },
    { unidade: "AMOR SAUDE ARACATUBA - SP", email: "amorsaudearacatuba.com" },
    { unidade: "AMOR SAUDE ARARAQUARA - SP", email: "amorsaudeararaquara.com" },
    { unidade: "AMOR SAUDE TUCURUVI - SP", email: "amorsaudetucuruvi.com.br" },
    { unidade: "AMOR SAUDE DIADEMA - SP", email: "amorsaudediadema.com" },
    { unidade: "AMOR SAUDE TATUAPE - SP", email: "amorsaudetatuape.com" },
    { unidade: "AMOR SAUDE CAPELA DO SOCORRO - SP", email: "ascapela.com.br" },
    { unidade: "AMOR SAUDE TATUI - SP", email: "amorsaudetatui.com" },
    { unidade: "AMOR SAUDE JABAQUARA - SP", email: "amorsaudejabaquara.com" },
    { unidade: "TOTAL SAUDE JUNDIAI (SERVIDOR LOCAL)", email: "amorsaudejundiai.com" },
    { unidade: "AMOR SAUDE SAO JOSE DO RIO PRETO - SP", email: "amorsaudesjriopreto.com" },
    { unidade: "AMOR SAUDE ITAIM PAULISTA - SP", email: "amorsaudeitaim.com" },
    { unidade: "AMOR SAUDE EMBU DAS ARTES -SP", email: "amorsaudeembudasartes.com" },
    { unidade: "AMOR SAUDE ITANHAEM - SP", email: "amorsaudeitanhaem.com" },
    { unidade: "AMOR SAUDE VILA MARIA - SP", email: "amorsaudevm.com" },
    { unidade: "AMOR SAUDE ITAPECERICA DA SERRA - SP", email: "amorsaudeitapecerica.com" },
    { unidade: "AMOR SAUDE CAMPO LIMPO -SP", email: "amorsaudepirajussara.com" },
    { unidade: "AMOR SAUDE JACAREI - SP", email: "amorsaudejacarei.com" },
    { unidade: "AMOR SAUDE PRAIA GRANDE - SP", email: "amorsaudepraiagrande.com" },
    { unidade: "AMOR SAUDE MARILIA - SP", email: "amorsaudemarilia.com" },
    { unidade: "AMOR SAUDE BARUERI - SP", email: "amorsaudebarueri.com" },
    { unidade: "AMOR SAUDE GUARULHOS VH - SP", email: "amorsaudeguarulhosvh.com" },
    { unidade: "AMOR SAUDE AVARE - SP", email: "amorsaudeavare.com" },
    { unidade: "AMOR SAUDE MOGI - SP", email: "amorsaudemogi.com" },
    { unidade: "AMOR SAUDE PRESIDENTE PRUDENTE - SP", email: "amorsaudepprudente.com" },
    { unidade: "AMOR SAUDE ITAQUAQUECETUBA - SP", email: "amorsaudeitaqua.com" },
    { unidade: "AMOR SAUDE FRANCISCO MORATO - SP", email: "asfmorato.com" },
    { unidade: "AMOR SAUDE VARZEA PAULISTA - SP", email: "asvpaulista.com" },
    { unidade: "AMOR SAUDE GRAJAU (SERVIDOR LOCAL)", email: "asgrajau.com" },
    { unidade: "AMOR SAUDE BOTUCATU - SP", email: "asbotucatu.com" },
    { unidade: "AMOR SAUDE TUPA - SP2", email: "amorsaudetupa.com" },
    { unidade: "AMOR SAUDE SAO BERNARDO - SP2", email: "amssaobernardo.com"},
    { unidade: "AMOR SAUDE LEME - SP2", email: "amorsaudeleme.com"},
    { unidade: "AMOR SAUDE CIDADE ADEMAR - SP2", email: "ascidadeademar.com" },
    { unidade: "AMOR SAUDE PERUIBE - SP2", email: "asperuibe.com" },
    { unidade: "AMOR SAUDE LINS - SP2", email: "aslins.com"},
    { unidade: "AMOR SAUDE BLUMENAU - SP2", email: "amorsaudeblumenau.com" },
    { unidade: "AMOR SAUDE CASA VERDE - SP2", email: "ascasaverde.com" },
    { unidade: "AMOR SAUDE SANTO ANDRE - SP2", email: "assandre.com" },
    { unidade: "AMOR SAUDE ASSIS - SP2", email: "amorsaudeassis.com" },
    { unidade: "AMOR SAUDE PIRAPORINHA - SP2", email: "aspiraporinha.com" },
    { unidade: "AMOR SAUDE PIRITUBA - SP2", email: "amorsaudepirituba.com" },
    { unidade: "AMOR SAUDE SAO JOSE DOS CAMPOS - SP2", email: "asjcampos.com" },
    { unidade: "AMOR SAUDE SANTOS - SP2", email: "assantos.com" },
    { unidade: "AMOR SAUDE VARZEA PAULISTA - SP2", email: "asvpaulista.com" },
    { unidade: "AMOR SAUDE FRANCA - SP2", email: "amorsaudefranca.com" },
    { unidade: "AMOR SAUDE MOGI GUACU - SP2", email: "asmogiguacu.com" },
    { unidade: "AMOR SAUDE SALTO - SP2", email: "amorsaudesalto.com" },
    { unidade: "AMOR SAUDE ITAPETININGA - SP2", email: "amorsaudeitapetininga.com" },
    { unidade: "AMOR SAUDE CAMPINAS CENTRO - SP2", email: "ascampinascentro.com" },
    { unidade: "AMOR SAUDE INDAIATUBA - SP2", email: "amorsaudeindaiatuba.com" },
    { unidade: "AMOR SAUDE SUMARE - SP2", email: "assumare.com" },
    { unidade: "AMOR SAUDE CAMPINAS SUDOESTE - SP2", email: "ascampinassudoeste.com" },
    { unidade: "AMOR SAUDE VILA ANDRADE - SP2", email: "asvilaandrade.com" },
    { unidade: "AMOR SAUDE SAPOPEMBA - SP2", email: "assapopemba.com" },
    { unidade: "AMOR SAUDE PIMENTAS - SP2", email: "ascumbica.com" },
    { unidade: "PET DE TODOS VILA AMERICANA - SP2", email: "petdetodosamericana.com" },
    { unidade: "AMOR SAUDE VILA NOVA DE ITAPEVI - SP2", email: "asvnitapevi.com" },
    { unidade: "AMOR SAUDE FRANCO DA ROCHA - SP2", email: "asfrancodarocha.com" },
    { unidade: "AMOR SAUDE CARAGUATATUBA - SP2", email: "ascaraguatatuba.com" },
    { unidade: "AMOR SAUDE BARRETOS - SP2", email: "asbarretos.com" },
    { unidade: "AMOR SAUDE SUZANO - SP2", email: "assuzano.com" },
    { unidade: "AMOR SAUDE APOIO FRANCA - SP2", email: "asapoiofranca.com" },
    { unidade: "AMOR SAUDE BEBEDOURO - SP2", email: "asbebedouro.com" },
    { unidade: "AMOR SAUDE VILA SUÍSSA - SP2", email: "asvilasuica.com" },
    { unidade: "AMOR SAUDE CAMPINAS - SP2", email: "amorsaudecampinas.com" },
    { unidade: "AMOR SAUDE COTIA - SP2", email: "amscotia.com" },
    { unidade: "AMOR SAUDE OSASCO - SP2", email: "amcasaudeosasco.com" },
    { unidade: "AMOR SAUDE GUARATINGUETA - SP2", email: "amsguartingueta.com" },
    { unidade: "AMOR SAUDE CUBATAO - SP3", email: "amscubatao.com"},
    { unidade: "AMOR SAUDE FERRAZ DE VASCONCELOS - SP3", email: "amorsaudefvasconcelos.com" },
    { unidade: "AMOR SAUDE OSASCO CENTRO - SP3", email: "asosascocentro.com"},
    { unidade: "AMOR SAUDE GUAIANASES - SP3", email: "amsguaianases.com"},
    { unidade: "AMOR SAUDE SAO JOSE DA BOA VISTA - SP3", email: "amssjboavista.com"},
    { unidade: "AMOR SAUDE AMERICANA - SP3", email: "asamericana.com" },
    { unidade: "AMOR SAUDE PERUS - SP (FILIAL) - SP3", email: "amsperusfilial.com"},
    { unidade: "AMOR SAUDE SAO MIGUEL - SP3", email: "amorsaudesaomiguel.com"},
    { unidade: "AMOR SAUDE IPIRANGA - SP3", email: "amorsaudeipiranga.com" },
    { unidade: "AMOR SAUDE NOVO HAMBURGO - SUL", email: "amsnovohamburgo.com"},
    { unidade: "AMOR SAUDE FOZ - SUL", email: "amsfozdoiguacu.com"},
    { unidade: "AMOR SAUDE PIRAQUARA - SUL", email: "amspiraquara.com" },
    { unidade: "AMOR SAUDE VIAMAO - SUL", email: "amorsaudeviamao.com" },
    { unidade: "AMOR SAUDE SAO JOSE - SUL", email: "amorsaudesaojose.com" },
    { unidade: "AMOR SAUDE FLORIANOPOLIS - SUL", email: "amorsaudeflorianopolis.com" },
    { unidade: "AMOR SAUDE PONTA GROSSA - SUL", email: "amorsaudepontagrossa.com" },
    { unidade: "AMOR SAUDE APUCARANA - SUL", email: "amorsaudeapucarana.com" },
    { unidade: "AMOR SAUDE SANTA CRUZ DO SUL - SUL", email: "amorsaudesantacruz.com" },
    { unidade: "AMOR SAUDE CAXIAS DO SUL - SUL", email: "amorsaudecaxias.com" },
    { unidade: "AMOR SAUDE GUARAPUAVA - SUL", email: "amorsaudeguarapuava.com" },
    { unidade: "AMOR SAUDE CRISCIUMA - SUL", email: "amorsaudecrisciuma.com" },
    { unidade: "AMOR SAUDE PARANAGUA - SUL", email: "amorsaudeparanagua.com" },
    { unidade: "AMOR SAUDE JARAGUA DO SUL (SERVIDOR LOCAL) - SUL", email: "amorsaudejaragua.com" },
    { unidade: "AMOR SAUDE SAO JOSE DOS PINHAIS - SUL", email: "amorsaudepinhais.com" },
    { unidade: "AMOR SAUDE ARAUCARIA - SUL", email: "asaraucaria.com" },
    { unidade: "AMOR SAUDE PORTO ALEGRE - SUL", email: "aspalegre.com" },
    { unidade: "AMOR SAUDE ALVORADA - SUL", email: "asalvorada.com" },
    { unidade: "AMOR SAUDE VIAMAO (ODONTO) - SUL", email: "amorsaudeviamao.com" },
    { unidade: "AMOR SAUDE GUAIBA - SUL", email: "asguaiba.com" },
    { unidade: "AMOR SAUDE CACHOEIRINHA - SUL", email: "amorsaudecachoeirinha.com" },
    { unidade: "AMOR SAUDE CASTRO - SUL", email: "ascastro.com" },
    { unidade: "AMOR SAUDE CANOAS - SUL", email: "ascanoas.com" },
    { unidade: "AMOR SAUDE PINHEIRINHO - SUL", email: "aspinheirinho.com" },
    { unidade: "AMOR SAUDE TOLEDO - SUL", email: "astoledo.com" },
    { unidade: "AMOR SAUDE DE SAPUCAIA DO SUL - SUL", email: "assapucaiadosul.com"},
    { unidade: "AMOR SAUDE GRAVATAI - SUL", email: "asgravatai.com" },
    { unidade: "AMOR SAUDE ERECHIM - SUL", email: "aserechim.com" },
    { unidade: "AMOR SAUDE PONTA GROSSA LESTE - SUL", email: "aspontagrossa.com" },
    { unidade: "AMOR SAUDE UMUARAMA - SUL", email: "asumuarama.com" },
    { unidade: "AMOR SAUDE JOINVILLE - SUL", email: "asjoinville.com" },
    { unidade: "AMOR SAUDE ITAJAI - SUL", email: "amorsaudeitajai.com" },
    { unidade: "AMOR SAUDE CAMPO LARGO - SUL", email: "amorsaudecampolargo.com" },
    { unidade: "AMOR SAUDE CHAPECO - SUL", email: "aschapeco.com" },
    { unidade: "AMOR SAUDE PASSO FUNDO - SUL", email: "aspassofundo.com" },
    { unidade: "AMOR SAUDE LONDRINA - SUL", email: "aslondrina.com" },
    { unidade: "AMOR SAUDE SARANDI - SUL", email: "assarandi.com" },
    { unidade: "AMOR SAUDE MATHIAS VELHO - SUL", email: "asmathiasvelho.com" },
    { unidade: "AMOR SAUDE POA CENTRO - SUL", email: "aspoa.com" },
    { unidade: "AMOR SAUDE PALHOCA CENTRO - SUL", email: "amspalhoca.com" },
    { unidade: "AMOR SAUDE LAGES - SUL", email: "amslages.com" },
    { unidade: "AMOR SAUDE CABO FRIO - RJ", email: "amscabofrio.com"},
    { unidade: "AMOR SAUDE MADUREIRA - RJ", email: "amorsaudemadureira.com" },
    { unidade: "AMOR SAUDE ILHA DO GOVERNADOR - RJ", email: "amsilhadogov.com"},
    { unidade: "AMOR SAUDE SAO JOAO DE MERITI - RJ", email: "amorsaudesjmeriti.com" },
    { unidade: "AMOR SAUDE SAO GONCALO - RJ", email: "amorsaudesg.com" },
    { unidade: "AMOR SAUDE MAGE - RJ", email: "amorsaudemage.com" },
    { unidade: "AMOR SAUDE ANGRA DOS REIS - RJ", email: "amorsaudeangra.com" },
    { unidade: "AMOR SAUDE IRAJA - RJ", email: "amorsaudeiraja.com" },
    { unidade: "AMOR SAUDE NOVA FRIBURGO - RJ", email: "amorsaudenfriburgo.com" },
    { unidade: "AMOR SAUDE QUATRO ESTRELAS - RJ", email: "amorsaudequatroestrelas.com" },
    { unidade: "AMOR SAUDE TERESOPOLIS - RJ", email: "amorsaudeteresopolis.com" },
    { unidade: "AMOR SAUDE MARICA - RJ", email: "amorsaudemarica.com" },
    { unidade: "AMOR SAUDE VOLTA REDONDA - RJ", email: "amorsaudevredonda.com" },
    { unidade: "AMOR SAUDE MEIER - RJ", email: "amorsaudemeier.com" },
    { unidade: "AMOR SAUDE GOITACAZES - RJ", email: "asgoitacazes.com"},
    { unidade: "AMOR SAUDE GUARUS - RJ", email: "amsguarus.com"},
    { unidade: "AMOR SAUDE CAMPO GRANDE - RJ", email: "amorsaudecgrande.com" },
    { unidade: "AMOR SAUDE MACAE - RJ", email: "amorsaudemacae.com" },
    { unidade: "AMOR SAUDE NOVA IGUACU - RJ", email: "asnovaiguacu.com" },
    { unidade: "AMOR SAUDE RESENDE - RJ", email: "amorsauderesende.com" },
    { unidade: "AMOR SAUDE BANGU - RJ", email: "asbangu.com" },
    { unidade: "AMOR SAUDE PETROPOLIS - RJ", email: "aspetropolis.com" },
    { unidade: "AMOR SAUDE ITABORAI - RJ", email: "amorsaudeitaborai.com" },
    { unidade: "AMOR SAUDE ITAPERUNA - RJ", email: "asitaperuna.com" },
    { unidade: "AMOR SAUDE REALENGO - RJ", email: "amorsauderealengo.com" },
    { unidade: "AMOR SAUDE TRES RIOS - RJ", email: "astresrios.com" },
    { unidade: "AMOR SAUDE BELFORD ROXO - RJ", email: "asbelfordroxo.com" },
    { unidade: "AMOR SAUDE DUQUE DE CAXIAS - RJ", email: "asduquedecaxias.com" },
    { unidade: "AMOR SAUDE BARRA DO PIRAI - RJ", email: "asbarradopirai.com" },
    { unidade: "AMOR SAUDE ARARUAMA - RJ", email: "asararuama.com" },
    { unidade: "AMOR SAUDE PENHA - RJ", email: "amspenha.com" },
    { unidade: "APOIO AMOR SAUDE CAMPO GRANDE - RJ", email: "apoiocampogrande.com" },
    { unidade: "AMOR SAUDE BARRA MANSA - RJ", email: "amsbarramansa.com" },
    { unidade: "AMOR ODONTO CARIACICA - ES", email: "amorodontocariacica.com" },
    { unidade: "AMOR SAUDE VITORIA - ES", email: "amorsaudevitoria.com" },
    { unidade: "AMOR SAUDE VILA VELHA - ES", email: "asvvelha.com" },
    { unidade: "AMOR SAUDE SERRA - ES", email: "amorsaudeserra.com" },
    { unidade: "AMOR SAUDE GUARAPARI - ES", email: "asguarapari.com" },
    { unidade: "AMOR SAUDE SAO MATEUS - ES", email: "assmateus.com" },
    { unidade: "AMOR SAUDE NOVA VENECIA - ES", email: "asnovavenecia.com" },
    { unidade: "AMOR SAUDE LINHARES - ES", email: "aslinhares.com" },
    { unidade: "AMOR SAUDE COLATINA - ES", email: "ascolatina.com" },
    { unidade: "AMOR SAUDE - CARIACICA - ES", email: "ascariacica.com" },
    { unidade: "AMOR SAUDE CACHOEIRO DE ITAPEMIRIM - ES", email: "ascachoeirodeitapemirim.com" },
    { unidade: "AMOR SAUDE VIANA - ES", email: "amsviana.com" },
    { unidade: "AMOR SAUDE SERRA SEDE - ES", email: "amsserrasede.com" },
    { unidade: "AMOR SAUDE VARGINHA - MG", email: "asvarginha.com"},
    { unidade: "AMOR SAUDE VALE DO ACO - MG", email: "amorsaudeva.com"},
    { unidade: "AMOR SAUDE PASSOS - MG", email: "amorsaudepassos.com"},
    { unidade: "AMOR SAUDE CLINICA SAO JOSE MONTES CLAROS - MG", email: "amorsaudemc.com.br" },
    { unidade: "AMOR SAUDE RIBEIRAO DAS NEVES - MG", email: "amorsaudeneves.com" },
    { unidade: "AMOR SAUDE BELO HORIZONTE NORTE - MG", email: "amorsaudebhnorte.com" },
    { unidade: "AMOR SAUDE SAO JOAO DEL REI - MG", email: "assjdelrei.com" },
    { unidade: "AMOR SAUDE POCOS DE CALDAS - MG", email: "aspocosdecaldas.com" },
    { unidade: "AMOR SAUDE BH OESTE - MG", email: "asbhoeste.com" },
    { unidade: "AMOR SAUDE UBA - MG", email: "asuba.com" },
    { unidade: "AMOR SAUDE VENDA NOVA - MG", email: "amsvendanova.com" },
    { unidade: "AMOR SAUDE JUIZ DE FORA - MG", email: "amorsaudejuizfora.com" },
    { unidade: "AMOR SAUDE DIVINOPOLIS - MG", email: "asdivinopolis.com" },
    { unidade: "AMOR SAUDE POUSO ALEGRE - MG", email: "aspousoalegre.com" },
    { unidade: "AMOR SAUDE SETE LAGOAS - MG", email: "assetelagoas.com" },
    { unidade: "AMOR SAUDE MONTES CLAROS (FILIAL) - MG", email: "asmontesclarosfilial.com"},
    { unidade: "AMOR SAUDE LAVRAS - MG", email: "amorsaudelavras.com" },
    { unidade: "AMOR SAUDE UBERLANDIA - MG", email: "amorsaudeuberlandia.com" },
    { unidade: "AMOR SAUDE ITAUNA - MG", email: "amsitauna.com	"},
    { unidade: "AMOR SAUDE CONTAGEM - MG", email: "ascontagem.com" },
    { unidade: "AMOR SAUDE SAO PEDRO - MG", email: "assaopedro.com" },
    { unidade: "AMOR SAUDE JUSTINOPOLIS - MG", email: "asjustinopolis.com" },
    { unidade: "AMOR SAUDE MOSSORO (SERVIDOR LOCAL)", email: "amorsaudemossoro.com" },
    { unidade: "AMOR SAUDE MARACANAU (SERVIDOR LOCAL)", email: "amorsaudemaracanau.com" },
    { unidade: "AMOR SAUDE BELEM - NORTE", email: "amorsaudebelem.com" },
    { unidade: "AMOR SAUDE MACAPA - NORTE", email: "asmacapa.com"},
    { unidade: "AMOR SAUDE ABAETETUBA - NORTE", email: "asabaetetuba.com"},
    { unidade: "CARTAO DE TODOS NOVA FRIBURGO - NORTE", email: "cartaodetodosnfriburgo.com"},
    { unidade: "CARTAO DE TODOS CIDADE ADEMAR - NORTE", email: "ctcademar.com"},
    { unidade: "CARTAO DE TODOS ITAQUAQUECETUBA - NORTE", email: "cartaodetodositaqua.com"},
    { unidade: "CARTAO DE TODOS CAXIAS DO SUL - NORTE", email: "sememail"}, 
    { unidade: "CARTAO DE TODOS SUZANO - NORTE", email: "cartao.com"},
    { unidade: "CARTAO DE TODOS VILA MARIA - NORTE", email: "cartaodetodosvilamaria.com"},
    { unidade: "CARTAO DE TODOS CAMPO GRANDE - NORTE", email: "cartaocg.com"},
    { unidade: "CARTAO DE TODOS SETE LAGOAS - NORTE", email: "cartaodetodoslagoas.com"},
    { unidade: "CARTAO DE TODOS VALE DO ACO - NORTE", email: "cartaodetodosvaledoaco.com    "},
    { unidade: "CARTAO DE TODOS MAUA - NORTE", email: "cartaodetodosmaua.com"},
    { unidade: "CARTAO DE TODOS GUARAPARI - NORTE", email: "cartaodetodosguarapari.com"},
    { unidade: "CARTAO DE TODOS MANAUS - NORTE", email: "cartaodetodosmanaus.com"},
    { unidade: "CARTAO DE TODOS ITAIM - NORTE", email: "cartaodetodositaim.com"},
    { unidade: "CARTAO DE TODOS JUIZ DE FORA - NORTE", email: "cartaodetodosjfora.com	"},
    { unidade: "CARTAO DE TODOS MARICA - NORTE", email: "cartaodetodosmarica.com"},
    { unidade: "CARTAO DE TODOS TATUAPE - NORTE", email: "cataotatuape.com"},
    { unidade: "CARTAO DE TODOS RUSSAS - NORTE", email: "cartaodetodosrussas.com"},
    { unidade: "CARTAO DE TODOS GUARULHOS PIMENTAS - NORTE", email: "cartaodetodospimentas.com"},
    { unidade: "CARTAO DE TODOS JABAQUARA - NORTE", email: "ctjabaquara.com"},
    { unidade: "CARTAO DE TODOS PIRITUBA / PERUS - NORTE", email: "cartaodetodosperus.com"},
    { unidade: "CARTAO DE TODOS SAO MIGUEL PAULISTA - NORTE", email: "cartaosmiguelpaulista.com"},
    { unidade: "CARTAO DE TODOS ERMELINO MATARAZZO - NORTE", email: "ctematarazzo.com"},
    { unidade: "CARTAO DE TODOS SAO GONCALO - NORTE", email: "cartaosgoncalo.com"},
    { unidade: "CARTAO DE TODOS CAMPINA GRANDE - NORTE", email: "ctcampinagrande.com"},
    { unidade: "CARTÃO DE TODOS MOGI DAS CRUZES - NORTE", email: "ctmogi.com"},
    { unidade: "CARTÃO DE TODOS VOLTA REDONDA - NORTE", email: "ctvoltaredonda.com"},
    { unidade: "CARTAO DE TODOS PIRITUBA FILIAL 2 - NORTE", email: "cartaodetodos.com"},
    { unidade: "CARTAO DE TODOS NOVO HAMBURGO - NORTE", email: "ctnovohamburgo.com"},
    { unidade: "CARTAO DE TODOS ITAPECERICA DA SERRA - NORTE", email: "cartaodetodositape.com"},
    { unidade: "CARTAO DE TODOS NOVA SERRANA - NORTE", email: "cartaodetosonovaserra.com"},
    { unidade: "CARTAO DE TODOS IPIRANGA - NORTE", email: "cartaoipiranga.com"},
    { unidade: "CARTAO DE TODOS COLATINA - NORTE", email: "ctcolatina.com"},
    { unidade: "CARTAO DE TODOS RIBEIRAO DAS NEVES - NORTE", email: "ctribeiraodasneves.com"},
    { unidade: "CARTAO DE TODOS TUCURUVI - NORTE", email: "cartaodetodostucuruvi.com"},
    { unidade: "CARTAO DE TODOS PENHA - NORTE", email: "cartaodetodospenha.com"},
    { unidade: "CARTAO DE TODOS SERRA CENTRO - NORTE", email: "ctserracentro.com"},
    { unidade: "CARTAO DE TODOS VILA VELHA - NORTE", email: "cartaodetodosvila.com"},
    { unidade: "CARTAO DE TODOS GUARAPUAVA - NORTE", email: "cartaodetodosguarapuava.com"},
    { unidade: "CARTAO DE TODOS MONTES CLAROS - NORTE", email: "cartaomontesclaros.com"},
    { unidade: "CARTAO DE TODOS SERRA - NORTE", email: "cartaodetodosserra.com	"},
    { unidade: "AMOR SAUDE MANAUS CENTRO - NORTE", email: "amorsaudeamcentro.com" },
    { unidade: "AMOR SAUDE MANAUS- NORTE", email: "amorsaudeam.com" },
    { unidade: "AMAR SAUDE MARABA - NORTE", email: "amorsaudemaraba.com" },
    { unidade: "AMOR SAUDE PORTO VELHO - NORTE", email: "amorsaudeporto.com" },
    { unidade: "AMOR SAUDE ANANINDEUA - NORTE", email: "amorsaudeananindeua.com" },
    { unidade: "AMOR SAUDE ARAGUAINA - NORTE", email: "asaraguaina.com" },
    { unidade: "AMOR SAUDE BELEM CENTRO - NORTE", email: "asbelemcentro.com" },
    { unidade: "AMOR SAUDE MANAUS CIDADE NOVA - NORTE", email: "asmanauscnova.com" },
    { unidade: "AMOR SAUDE PARAUPEBAS - NORTE", email: "asparaupebas.com" },
    { unidade: "AMOR SAUDE JI PARANA - NORTE", email: "amorsaudejiparana.com" },
    { unidade: "AMOR SAUDE PALMAS - NORTE", email: "aspalmas.com.br" },
    { unidade: "AMOR SAUDE BARCARENA - NORTE", email: "asbarcarena.com" },
    { unidade: "AMOR SAUDE BOA VISTA - NORTE", email: "amsboavista.com" },
    { unidade: "AMOR SAUDE MOJU - NORTE", email: "amorsaudemoju.com"},
    { unidade: "AMOR SAUDE TUCURUI - NORTE", email: "amstucurui.com"},
    { unidade: "AMOR SAUDE CASTANHAL - NORTE", email: "amscastanhal.com"},
    { unidade: "AMOR SAUDE RIO BRANCO - NORTE", email: "asriobranco.com" },
    { unidade: "AMOR SAUDE ANANINDEUA CENTRO - NORTE", email: "asananindeuacentro.com" },
    { unidade: "AMOR SAUDE JOAO PESSOA - NE", email: "amorsaude.com.br" },
    { unidade: "AMOR SAUDE MESSEJANA - NE", email: "amorsaudemessejana.com.br" },
    { unidade: "AMOR SAUDE PARNAMIRIM - NE", email: "amorsaudeparnamirim.com.br" },
    { unidade: "AMOR SAUDE FORTALEZA CENTRO - NE", email: "amorsaudefortaleza1.com" },
    { unidade: "AMOR SAUDE FORTALEZA PSJ - NE", email: "amorsaudepsj.com" },
    { unidade: "AMOR SAUDE NATAL - NE", email: "amorsaudenatal.com" },
    { unidade: "AMOR SAUDE RUSSAS - NE", email: "asrussas.com" },
    { unidade: "AMOR SAUDE CAMPINA GRANDE - NE", email: "ascampinagrande.com" },
    { unidade: "AMOR SAUDE PATOS - NE", email: "aspatos.com" },
    { unidade: "AMOR SAUDE AQUIRAZ - NE", email: "asaquiraz.com" },
    { unidade: "AMOR SAUDE SOBRAL - NE", email: "amorsaudesobral.com" },
    { unidade: "AMOR SAUDE CAMOCIM - NE", email: "amorsaudecamocim.com" },
    { unidade: "AMOR SAUDE FORTALEZA DOM LUSTOSA - NE", email: "asdomlustosa.com" },
    { unidade: "AMOR SAUDE GUARABIRA - NE", email: "asguarabira.com" },
    { unidade: "AMOR SAUDE PACAJUS - NE", email: "aspacajus.com" },
    { unidade: "AMOR SAUDE CARIRI - NE", email: "ascariri.com" },
    { unidade: "AMOR SAUDE IGUATU - NE", email: "asiguatu.com" },
    { unidade: "AMOR SAUDE CONJUNTO CEARA - NE", email: "asconjuntoceara.com" },
    { unidade: "AMOR SAUDE MARANGUAPE - NE", email: "asmaranguape.com" },
    { unidade: "AMOR SAUDE CAUCAIA - NE", email: "amorsaudecaucaia.com" },
    { unidade: "APOIO AMOR SAUDE CRATO - NE", email: "amscrato.com" },
    { unidade: "AMOR SAÚDE ACARAU - NE", email: "amorsaudeacarau.com" },
    { unidade: "AMOR SAUDE SAO LUIZ (SERVIDOR LOCAL)", email: "amorsaudesaoluis.com" },
    { unidade: "AMOR SAUDE SJ DE RIBAMAR (SERVIDOR LOCAL)", email: "amorsaudesjribamar.com.br" },
    { unidade: "AMOR SAUDE ITABUNA - BA", email: "asitabuna.com" },
    { unidade: "AMOR SAUDE VITORIA DA CONQUISTA - BA", email: "amorsaudevc.com.br" },
    { unidade: "AMOR SAÚDE JUAZEIRO - BA", email: "amorsaudejuazeiro.com" },
    { unidade: "AMOR SAUDE SALVADOR - BA", email: "amorsaudesalvador.com" },
    { unidade: "AMOR SAUDE CAMACARI - BA", email: "amorsaudecamacari.com" },
    { unidade: "AMOR SAUDE TEIXEIRA DE FREITAS - BA", email: "amorsaudetfreitas.com.br" },
    { unidade: "AMOR SAUDE FEIRA DE SANTANA - BA", email: "amorsaudefsantana.com.br" },
    { unidade: "AMOR SAUDE LAURO DE FREITAS - BA", email: "aslaurofreitas.com" },
    { unidade: "AMOR SAUDE PARIPE - BA", email: "asparipe.com" },
    { unidade: "AMOR SAUDE ILHEUS - BA", email: "asilheus.com" },
    { unidade: "AMOR SAUDE BARREIRAS - BA", email: "asbarreiras.com" },
    { unidade: "AMOR SAUDE SAJ - BA", email: "assaj.com" },
    { unidade: "AMOR SAUDE VALENCA - BA", email: "amsvalenca.com" },
    { unidade: "AMOR SAUDE PORTO SEGURO - BA", email: "asportoseguro.com" },
    { unidade: "AMOR SAUDE ALAGOINHAS - BA", email: "asalagoinhas.com" },
    { unidade: "AMOR SAUDE PAULO AFONSO - BA", email: "aspauloafonso.com" },
    { unidade: "AMOR SAUDE SIMOES FILHO - BA", email: "assfilho.com" },
    { unidade: "AMOR SAUDE JEQUIE - BA", email: "amorsaudejequie.com" },
    { unidade: "AMOR SAUDE IBIRAPUERA - BA", email: "asibirapuera.com" },
    { unidade: "AMOR SAUDE DOIS DE JULHO - BA", email: "asdoisdejulho.com" },
    { unidade: "AMOR SAUDE SERRINHA - BA", email: "amorsaudeserrinha.com" },
    { unidade: "AMOR SAUDE ITABUNA CENTRO - BA", email: "asitabunacentro.com" },
    { unidade: "AMOR SAUDE GUANAMBI - BA", email: "asguanambi.com" },
    { unidade: "AMOR SAUDE EUNAPOLIS - BA", email: "aseunapolis.com" },
    { unidade: "AMOR SAUDE CABULA - BA", email: "amorsaudecabula.com" },
    { unidade: "AMOR SAUDE NOSSA SENHORA DO SOCORRO - NE2", email: "amorsaudenss.com" },
    { unidade: "AMOR SAUDE PARNAIBA - NE2", email: "asparnaiba.com" },
    { unidade: "AMOR SAUDE PICOS - NE2", email: "amorsaudepicos.com" },
    { unidade: "AMOR SAUDE CAXIAS DO MARANHAO - NE2", email: "ascaxias.com" },
    { unidade: "AMOR SAUDE IMPERATRIZ - NE2", email: "asimperatriz.com" },
    { unidade: "AMOR SAUDE TERESINA CENTRO - NE2", email: "amorsaudeteresinacentro.com" },
    { unidade: "AMOR SAUDE TERESINA - NE2", email: "amorsaudeteresina.com" },
    { unidade: "AMOR SAUDE ARACAJU - NE2", email: "amorsaudearacaju.com" },
    { unidade: "AMOR SAUDE PAULISTA - NE3", email: "amorsaudepaulista.com.br" },
    { unidade: "AMOR SAUDE OLINDA - NE3", email: "amorsaudeolinda.com.br" },
    { unidade: "AMOR SAUDE CAMARAGIBE - NE3", email: "amorsaudecamaragibe.com" },
    { unidade: "AMOR SAUDE RECIFE CENTRO - NE3", email: "amorsauderecifecentro.com" },
    { unidade: "AMOR SAUDE AFOGADOS - NE3", email: "amorsaudeafogados.com.br" },
    { unidade: "AMOR SAUDE PETROLINA - NE3", email: "aspetrolina.com" },
    { unidade: "AMOR SAUDE ARAPIRACA - NE3", email: "amorsaudearapiraca.com.br" },
    { unidade: "AMOR SAUDE JABOATAO - NE3", email: "asjaboatao.com" },
    { unidade: "AMOR SAUDE GARANHUNS - NE3", email: "asgaranhuns.com" },
    { unidade: "AMOR SAUDE GOIANA - NE3", email: "asgoiana.com" },
    { unidade: "AMOR SAUDE VITORIA DE SANTO ANTAO - NE3", email: "asvitoriadesantoantao.com" },
    { unidade: "AMOR SAUDE MACEIO NORTE - NE3", email: "asmaceionorte.com" },
    { unidade: "AMOR SAUDE TIMBAUBA - NE3", email: "astimbauba.com" },
    { unidade: "AMOR SAUDE MACEIO - NE3", email: "asmaceio.com" },
    { unidade: "AMOR SAUDE SURUBIM - NE3", email: "assurubim.com" },
    { unidade: "AMOR SAUDE CARUARU - NE3", email: "ascaruaru.com" },
    { unidade: "AMOR SAUDE SERRA TALHADA - NE3", email: "asserratalhada.com" },
    { unidade: "AMOR SAUDE IGARASSU - NE3", email: "asigarassu.com" },
    { unidade: "AMOR SAUDE BEZERROS - NE3", email: "asbezerros.com"},
    { unidade: "AMOR SAUDE ANAPOLIS ALEXANDRINA - CO", email: "amsalexandrina.com"},
    { unidade: "AMOR SAUDE CAMPO GRANDE - CO", email: "amorsaudecg.com.br" },
    { unidade: "AMOR SAUDE CUIABA - CO", email: "amorsaudecuiaba.com.br" },
    { unidade: "AMOR SAUDE LUZIANIA - CO", email: "amsluziania.com"},
    { unidade: "AMOR SAUDE SINOP - CO", email: "amorsaudesinop.com"},
    { unidade: "AMOR SAUDE GOIANIA SUL - CO", email: "amorsaudegs.com" },
    { unidade: "AMOR SAUDE SAMAMBAIA - CO", email: "amorsaudesamambaia.com" },
    { unidade: "AMOR SAUDE VALPARAISO - CO", email: "amorsaudevpgo.com.br" },
    { unidade: "AMOR SAUDE VARZEA GRANDE - CO", email: "amorsaudevarzeagrande.com" },
    { unidade: "AMOR SAUDE RONDONOPOLIS - CO", email: "amorsauderondonopolis.com" },
    { unidade: "AMOR SAUDE CEILANDIA - CO", email: "amorsaudeceilandia.com" },
    { unidade: "AMOR SAUDE GAMA - CO", email: "amorsaudegama.com" },
    { unidade: "AMOR SAUDE TRES LAGOAS - CO", email: "astreslagoas.com" },
    { unidade: "AMOR SAUDE ITUMBIARA - CO", email: "asitumbiara.com" },
    { unidade: "AMOR SAUDE TANGARA DA SERRA - CO", email: "amorsaudetangara.com" },
    { unidade: "AMOR SAUDE CEILANDIA SUL - CO", email: "asceilandiasul.com" },
    { unidade: "AMOR SAUDE AGUAS LINDAS DE GOIAS - CO", email: "amorsaudeaguaslindas.com" },
    { unidade: "AMOR SAUDE RIO VERDE - CO", email: "asrioverde.com" },
    { unidade: "AMOR SAUDE ANAPOLIS - CO", email: "asanapolis.com" },
    { unidade: "AMOR SAUDE PLANALTINA - CO", email: "asplanaltina.com" },
    { unidade: "AMOR SAUDE JARDIM BALNEARIO - CO", email: "asjardimbalneario.com" },
    { unidade: "AMOR SAUDE GOIANIA CENTRO NORTE - CO", email: "asgcentronorte.com" },
    { unidade: "AMOR SAUDE SANTA MARIA - CO", email: "assantamaria.com" },
    { unidade: "AMOR SAUDE VICENTE PIRES - CO", email: "asvicentepires.com" },
    { unidade: "AMOR SAUDE TAGUATINGA - CO", email: "astaguatinga.com" },
    { unidade: "AMOR SAUDE SENADOR CANEDO - CO", email: "asscanedo.com" },
    { unidade: "AMOR SAUDE DO CRUZEIRO - CO", email: "asdocruzeiro.com" },
    { unidade: "AMOR SAUDE RECANTO DAS EMAS - CO", email: "asrecantodasemas.com" },
    { unidade: "AMOR SAUDE CALDAS NOVAS - CO", email: "ascaldasnovas.com" },
    { unidade: "AMOR SAUDE FORMOSA - CO", email: "amorsaudeformosa.com" },
    { unidade: "AMOR SAUDE CACERE - CO", email: "ascaceres.com"},
    { unidade: "AMOR SAUDE SAO SEBASTIAO - CO", email: "amssaosebastiao.com" },


];







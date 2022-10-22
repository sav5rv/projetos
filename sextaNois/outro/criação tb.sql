CREATE TABLE IF NOT EXISTS tb_aluno (
id INT NOT NULL AUTO_INCREMENT ,
nome VARCHAR(150) NOT NULL ,
PRIMARY KEY ( id ) ,
UNIQUE INDEX nome_UNIQUE ( nome ASC) )
ENGINE = InnoDB;

------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS tb_prof (
id INT NOT NULL AUTO_INCREMENT ,
nome VARCHAR(150) NOT NULL ,
especialidade VARCHAR(150) NOT NULL ,
PRIMARY KEY ( id ) ,
UNIQUE INDEX nome_UNIQUE ( nome ASC) )
ENGINE = InnoDB;

------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS tb_grp (
id INT NOT NULL AUTO_INCREMENT ,
descricao VARCHAR(150) NOT NULL ,
PRIMARY KEY ( id ) ,
UNIQUE INDEX descricao_UNIQUE ( descricao ASC) )
ENGINE = InnoDB;

------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS tb_perg (
id INT NOT NULL AUTO_INCREMENT,
prof_id INT NOT NULL ,
grp_id INT NOT NULL ,
descricao VARCHAR(150) NOT NULL ,
PRIMARY KEY ( id ) ,
UNIQUE INDEX descricao_UNIQUE ( descricao ASC) ,
CONSTRAINT fk_grp_id FOREIGN KEY (grp_id) REFERENCES tb_grp (id) ,
CONSTRAINT fk_prof_id FOREIGN KEY (prof_id) REFERENCES tb_prof (id)
)
ENGINE = InnoDB;

------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS tb_quest (
    id INT NOT NULL AUTO_INCREMENT,
    aluno_id INT NOT NULL ,
    prof_id INT NOT NULL ,
    perg_id INT NOT NULL ,
    nome VARCHAR (150) ,
    data_criacao DATE NULL , 
    resposta VARCHAR (150) NULL ,
    PRIMARY KEY (id , aluno_id , prof_id , perg_id),
    INDEX fk_aluno_has_prof_prof1 (prof_id ASC),
    INDEX fk_aluno_has_prof_aluno1 (aluno_id ASC),
    INDEX fk_aluno_has_perg_perg1 (perg_id ASC),
    CONSTRAINT fk_aluno_has_prof_aluno1 FOREIGN KEY (aluno_id) REFERENCES tb_aluno (id) ,        
    CONSTRAINT fk_aluno_has_prof_prof1 FOREIGN KEY (prof_id) REFERENCES tb_prof (id) ,        
    CONSTRAINT fk_aluno_has_perg_aluno1 FOREIGN KEY (aluno_id) REFERENCES tb_aluno (id) ,        
    CONSTRAINT fk_aluno_has_perg_perg1 FOREIGN KEY (perg_id) REFERENCES tb_perg (id)        
)
ENGINE = INNODB;

ALTER TABLE Carro
ADD CONSTRAINT fk_grp_id FOREIGN KEY (fk_grp_id) REFERENCES tb_grp (id) ,
ADD CONSTRAINT fk_prof_id FOREIGN KEY (fk_prof_id) REFERENCES tb_prof (id)
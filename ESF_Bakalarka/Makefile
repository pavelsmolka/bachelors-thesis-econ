RUN_COUNT=3
DO_PDF_OPT=1
NAME=bakalarska-prace


DOCUMENT_DEPENDENCIES=${NAME}.tex fithesis.cls fit??.clo fi-logo*.mf
DOCUMENT_METADATA=${NAME}.{aux,brf,log,out,pdf,toc}

SHELL=/bin/bash
PDF_PRODUCER=pdflatex
PDF_PRODUCER_ARGUMENTS=
PDF_OPTIMIZER=pdfopt
PDF_OPTIMIZER_ARGUMENTS=



.PHONY: all pdf vlna clean

all: pdf
pdf: ${NAME}.pdf

clean:
	@echo -e "\n### Zahajuji uklid... ###"
	-rm ${NAME}.{aux,brf,dvi,log,out,pdf,ps,toc} fi-logo*.tfm fi-logo*.*pk
	@echo -e "### Uklid hotov. ###"

vlna:
	@echo -e "\n### Spoustim vlnu na zdrojove kody... ###"
	vlna -r -l -v KkSsVvZzOoUuAaIi ${NAME}.tex
	@echo -e "### Uprava zdrojovych kodu vlnou hotova. ###"


${NAME}.pdf: ${DOCUMENT_DEPENDENCIES}
	@echo -e "\n### Vytvarim PDF vystup... ###"
	@echo -e "\n### Odstranuji stara metadata... ###"
	-rm ${DOCUMENT_METADATA}
	@echo -e "### Odstraneni starych metadat hotovo. ###"
	@echo -e "\n### Prekladam... ###"
	${PDF_PRODUCER} ${PDF_PRODUCER_ARGUMENTS} ${NAME}.tex
ifneq (${RUN_COUNT}, 1)
	for i in `seq $$[${RUN_COUNT}-1]`; do \
		echo; \
		${PDF_PRODUCER} ${PDF_PRODUCER_ARGUMENTS} ${NAME}.tex; \
	done
endif
	@echo -e "### Preklad hotov. ###"
ifeq (${DO_PDF_OPT}, 1)
	@echo -e "\n### Optimalizuji PDF vystup... ###"
	mv ${NAME}.pdf ${NAME}-in.pdf
	${PDF_OPTIMIZER} ${PDF_OPTIMIZER_ARGUMENTS} ${NAME}-in.pdf ${NAME}.pdf
	rm ${NAME}-in.pdf
	@echo -e "### Optimalizace PDF vystupu hotova. ###"
endif
	@echo -e "\n### PDF vystup hotov. ###"

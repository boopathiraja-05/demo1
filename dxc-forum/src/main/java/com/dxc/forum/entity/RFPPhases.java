package com.dxc.forum.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
@Table(name="phases")
public class RFPPhases {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;
	@Column(name = "phases")
	private String phases;
	@Column(name = "estimation_variable")
	private String estimationVariable;
	@Column(name = "effort_ph")
	private String effortPh;
	@Column(name = "effort_man_months")
	private String effortManMonths;
	
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
	@JoinColumn(name = "rfp_id")
	private RFP rfp;

	public RFPPhases() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RFPPhases(Long id, String phases, String estimationVariable, String effortPh, String effortManMonths,
			RFP rfp) {
		super();
		this.id = id;
		this.phases = phases;
		this.estimationVariable = estimationVariable;
		this.effortPh = effortPh;
		this.effortManMonths = effortManMonths;
		this.rfp = rfp;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPhases() {
		return phases;
	}

	public void setPhases(String phases) {
		this.phases = phases;
	}

	public String getEstimationVariable() {
		return estimationVariable;
	}

	public void setEstimationVariable(String estimationVariable) {
		this.estimationVariable = estimationVariable;
	}

	public String getEffortPh() {
		return effortPh;
	}

	public void setEffortPh(String effortPh) {
		this.effortPh = effortPh;
	}

	public String getEffortManMonths() {
		return effortManMonths;
	}

	public void setEffortManMonths(String effortManMonths) {
		this.effortManMonths = effortManMonths;
	}

	public RFP getRfp() {
		return rfp;
	}

	public void setRfp(RFP rfp) {
		this.rfp = rfp;
	}
	
	
}
